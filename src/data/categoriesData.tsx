import { getImageUrl } from '../utils/imageLoader';

const categories = [
    
    {
        "id": 1,
        "name": "appetizers",
        "image": getImageUrl('appetizers', 'sardines_soup.webp')
    },
     {
        "id": 2,
        "name": "Breakfast",
        "image": getImageUrl('breakfast', 'poached_eggs_salmon.webp')
    },
     {
        "id": 3,
        "name": "Desserts",
        "image": getImageUrl('desserts', 'tarts.webp')
    },
     {
        "id": 4,
        "name": "Dinner",
        "image": getImageUrl('dinner', 'chicken_roasted_veggies.webp')
    },
     {
        "id": 5,
        "name": "Salads",
        "image": getImageUrl('salads', 'shrimp.webp')
    },
     {
        "id": 6,
        "name": "Smoothies",
        "image": getImageUrl('smoothies', 'rasberries_strawberry.webp')

    },
     {
        "id": 7,
        "name": "Yogurt Bowls",
         "image": getImageUrl('yogurtBowls', 'banana_blueberries_cashew.webp')
    }
]

export default categories;