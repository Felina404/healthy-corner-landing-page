import { getImageUrl } from '../utils/imageLoader';


const offers = [
    {
        "id": 1,
        "name": "2 + 1 Yogurt Bowls",
         "images" : [
            getImageUrl('yogurtBowls', 'berries_coconut_cherry.webp'),
            getImageUrl('yogurtBowls', 'spirulina_banana.webp'),
            getImageUrl('yogurtBowls', 'kiwi_cocoa_blueberries.webp')
         ]
    },
      {
        "id": 2,
        "name": "2 Salads + 1 Smoothie",
         "images" : [
            getImageUrl('salads', 'cherry_tomatoes.webp'),
            getImageUrl('salads', 'salmon_soyBeans.webp'),
            getImageUrl('smoothies', 'kale.webp')
         ]
    },
      {
        "id": 3,
        "name": "After 13:00: 1 Breakfast + 1 Smoothie",
         "images" : [
            getImageUrl('breakfast', 'poached_eggs_salmon.webp'),
            getImageUrl('smoothies', 'strawberry.webp')
         ]
    },
      {
        "id": 4,
        "name": "Every Thursday: 1 Dinner + 1 Dessert",
         "images" : [
            getImageUrl('dinner', 'fish_roasted_veggies.webp'),
            getImageUrl('desserts', 'tarts.webp')
         ]
    }

];

export default offers;