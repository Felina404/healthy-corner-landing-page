import { useEffect, useState, useRef } from 'react'
import Pagination from './Pagination';

function Menu() {
  const [menu, setMenu] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [activeMenu, setActiveMenu] = useState([]);
  const [page, setPage] = useState(1);
  const [offersInView, setOffersInView] = useState<boolean[]>([]);
  const [offers, setOffers] = useState([]);

  const menuRef = useRef<HTMLDivElement>(null);
  const offerRefs = useRef<(HTMLDivElement | null)[]>([]);



  useEffect(() => {
    fetch('/menu.json')
    .then((res) => res.json())
    .then((data) => setMenu(data)); 
  },[]);

   useEffect(() => {
    fetch('/categories.json')
    .then((res) => res.json())
    .then((data) => setCategories(data)); 
  },[]);

   useEffect(() => {
    fetch('/offers.json')
    .then((res) => res.json())
    .then((data) => setOffers(data));
  },[]);

  useEffect(() => {
    if (!activeCategory) {
      setActiveMenu(menu);
    } else {
      let tmp =  menu.filter((item:any) => item.category.toLowerCase() === activeCategory.toLowerCase());
      setActiveMenu(tmp);
    }
    
  }, [activeCategory, menu])

  useEffect(() => {
    setPage(1);
  }, [activeCategory]);

  useEffect(() => {
    if (menuRef.current) {
      menuRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [page]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    offerRefs.current.forEach((ref, idx) => {
      if (!ref) return;
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          setOffersInView((prev) => {
            const updated = [...prev];
            updated[idx] = entry.isIntersecting;
            return updated;
          });
        },
        { threshold: 0.7 }
      );
      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [offers]);
 


  const topRated = menu.filter((item:any) => item.rating >=4.5);

    const itemsPerPage = 6;
    const lastIndex = page * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const currentItems = activeMenu.slice(firstIndex, lastIndex);

  return (
    <div  className='flex flex-col items-center justify-center text-fg bg-bg'>    
        <div className='relative w-full flex flex-col items-center justify-center'>
           <div className='divider'></div>
           <h2 className='text-2xl font-bold'>Top Rated</h2>
           <div className='flex flex-col md:flex-row  justify-center flex-wrap'>
                {topRated.map((item: any) => (
               <div
                key={item.id}
                className="flex flex-col items-center justify-center w-full max-w-sm h-[400px] p-4 rounded-lg">
                <h3 className="w-full text-center text-xl font-semibold mb-2 min-h-[3rem]">{item.name}</h3>
                <img src={item.image}alt={item.name} className="w-32 h-32 object-cover rounded-2xl mb-2"/>
                <p className="text-fg text-left w-full min-h-[4rem]">{item.description}</p>
                <span className="text-primary font-bold">${item.price}</span>
              </div>
        ))}
           </div>              
           </div>

           <div id='menu' className='relative w-full flex flex-col items-center'>
            <div className='divider'></div>
            <h2 className='text-2xl font-bold mb-4'>Menu</h2>
            <div className='flex flex-col md:flex-row  justify-center flex-wrap gap-6'>
               <button onClick={() => {setActiveCategory("")}}
                  key={"all"}
                  className={`flex flex-col items-center focus:outline-none} cursor-pointer hover:text-muted hover:underline ${activeCategory === "" ? 'text-muted' : 'text-fg'}`}
                >
                  <img
                    src='src/assets/header-logo.png' 
                    alt= "All Categories"
                    className='w-24 h-24 object-cover rounded-full mb-2'
                  />
                  <span className='font-semibold'>All</span>
                </button>
              {categories && categories.map((category: any) => (
                 <button onClick={() => {setActiveCategory(category.name)}}
                  key={category.id}
                  className={`flex flex-col items-center focus:outline-none} cursor-pointer hover:text-muted hover:underline ${activeCategory === category.name ? 'text-muted' : 'text-fg'}`}
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className='w-24 h-24 object-cover rounded-full mb-2'
                  />
                  <span className='font-semibold'>{category.name}</span>
                </button>
              ))}
            </div> 
           
           <div ref={menuRef}  className='mt-2 flex flex-col md:flex-row  justify-center flex-wrap'>
                {currentItems.map((item: any) => (
               <div
                key={item.id}
                className="relative group flex flex-col items-center justify-center w-full max-w-sm h-[400px] p-4 rounded-lg">
                <h3 className="w-full text-center text-xl font-semibold mb-2 min-h-[3rem]">{item.name}</h3>
                <img src={item.image} alt={item.name} className="w-32 h-32 object-cover rounded-2xl mb-2"/>
                <p className="text-fg text-left w-full min-h-[4rem]">{item.description}</p>
                <span className="text-primary font-bold">${item.price}</span>
                <div className='flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity mt-2'>
                 <div className='text-fg font-semibold text-sm'>
                  <div>Calories: {item.macros.calories}</div>
                  <div>Carbs: {item.macros.carbs}</div>
                  <div>Protein: {item.macros.protein}</div>
                  <div>Fat: {item.macros.fat}</div>
                  </div>
                  </div>
              </div>
        ))}
       
           </div>     
           <Pagination itemsPerPage={itemsPerPage} totalItems = {activeMenu.length} page={page} setPage={setPage}/>
           </div>      

          <div id='offers' className='relative w-full flex flex-col items-center justify-center'>
            <div className='divider'></div>
            <h2 className='text-2xl font-bold'>Offers</h2>
            
            <div className='flex flex-col flex-wrap justify-center items-center'>
             {offers && offers.map((offer: any, i: number) => (
              <div key={offer.id} 
              ref={el => {offerRefs.current[i] = el;}}
              className={`transition-all duration-500 ${offersInView[i] ? 'text-4xl font-extrabold' : 'text-xl'} flex flex-col items-center justify-center`}>
                <h3 className='text-[-10em] font-bold mb-2 p-2 text-center'>{offer.name}</h3>
               
                {offer.images.map((image: string, index: number) => (
                  <img
                    key={index}
                    src={image}
                    alt={offer.name}
                    className={`
                      w-32 h-32 object-cover rounded-lg mb-2
                      transition-all duration-900 ease-out
                      opacity-0
                      ${offersInView[i] ? 'opacity-100 translate-x-0' : index % 2 === 0 ? '-translate-x-32' : 'translate-x-32'}
                    `}
                  />
                ))}
            </div>
            ))}
            </div> 
    </div>
     </div>
    
  )
}

export default Menu
