import React from "react";


interface MenuItem {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  macros: {
    calories: number;
    carbs: number;
    protein: number;
    fat: number;
  };
}

const MenuCard = React.memo(({ item }: { item: MenuItem }) => {
      console.log('Rendering MenuCard:', item.id);

  return (
    <div className="relative group flex flex-col items-center justify-center w-full max-w-sm h-[400px] p-4 rounded-lg">
      <h3 className="w-full text-center text-xl font-semibold mb-2 min-h-[3rem]">{item.name}</h3>
      <img src={item.image} alt={item.name} className="w-32 h-32 object-cover rounded-2xl mb-2" loading="lazy" />
      <p className="text-fg text-left w-full min-h-[4rem]">{item.description}</p>
      <span className="text-primary font-bold">${item.price}</span>
      <div className="flex items-center justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity mt-2">
        <div className="text-fg font-semibold text-sm">
          <div>Calories: {item.macros.calories}</div>
          <div>Carbs: {item.macros.carbs}</div>
          <div>Protein: {item.macros.protein}</div>
          <div>Fat: {item.macros.fat}</div>
        </div>
      </div>
    </div>
  );
});

export default MenuCard;
