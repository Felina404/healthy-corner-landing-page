import './App.css'

function Footer() {

  return (
    <div id='footer' className='p-2 bg-fg text-bg flex flex-col justify-center items-center'>
      <div className='flex justify-between items-center w-[80%] px-4 py-2'>
        <div className='flex flex-col'>
          <h2 className='text-xl font-semibold'>Do you have any questions?</h2>
          <p className='mt-2'>Contact us and we will answer any question.</p>
        </div>
        <button className='flex-none px-4 py-2 bg-bg text-fg rounded-full font-semibold cursor-pointer'>Contact Us</button>
    </div>

      <div className='border-b border-bg w-[80%] p-2'></div>

      
      <div className='flex flex-col sm:flex-row flex-wrap pt-3 justify-between items-center w-[80%] px-4 py-2'>
        <div className='flex gap-4'>
          <a href="#menu" className="font-semibold"> Menu</a>
          <a href="#offers" className="font-semibold"> Offers</a>
          <a href="#about" className="font-semibold"> About</a>
          <a href="#reservation" className="font-semibold"> Reservation</a>
        </div>

        <div className='mt-3 sm:mt-0 flex gap-4 cursor-pointer'>
          <i className="fab fa-facebook-f text-1xl"></i>
          <i className="fab fa-instagram text-1xl"></i>
          <i className="fab fa-twitter text-1xl"></i>
        </div>
      </div>

       <div className='gap-4 pt-3 flex flex-col md:flex-row md:justify-between md:items-center w-[80%] px-4 py-2'>
        <div className='flex flex-col'>
          <p>Address:</p>
          <p>15 Street Avenue NY</p>
        </div>
        <div className='flex flex-col'>
          <p>Openning Hours:</p>
          <p>Mon-Sun: 12:00 AM-12:30 PM</p>
        </div>
         <div className='flex flex-col'>
          <p>Phone:</p>
          <p>+51 0505742455</p>
        </div>
         <div className='flex flex-col'>
          <p>Email:</p>
          <p>heathlyCorner@gmail.com</p>
        </div>
       </div>
       
       <p className='mt-4 mb-2 '>© 2025</p>
       <a className='text-gray-400' href="https://www.flaticon.com/free-icons/food" title="food icons">Food icons created by justicon - Flaticon</a>

      
    </div>
  )
}

export default Footer
