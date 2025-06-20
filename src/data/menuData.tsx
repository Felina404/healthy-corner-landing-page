import { getImageUrl } from '../utils/imageLoader';

const menu = [
    
    {
        "id": 1,
        "name": "Lobster Bite",
        "macros" : {
            "calories": 150,
            "carbs": 3,
            "protein": 10,
            "fat": 5
        },
        "price": 30,
        "image":getImageUrl('appetizers', 'lobster_bite.webp'),
        "description": "A delicious bite-sized lobster appetizer, perfect for seafood lovers.",
        "category": "appetizers",
        "rating": 4
    }, 

    {
        "id": 2,
        "name": "Sardines Soup",
        "macros" : {
            "calories": 300,
            "carbs": 0,
            "protein": 25,
            "fat": 30
        },
        "price": 15,
        "image":getImageUrl('appetizers', 'sardines_soup.webp'),
        "description": "A hearty soup made with fresh sardines, perfect for a light meal.",
        "category": "appetizers",
        "rating": 4
    },
    {
        "id": 3,
        "name": "Scallops",
        "macros" : {
            "calories": 150,
            "carbs": 5,
            "protein": 15,
            "fat": 5
        },
        "price": 20,
        "image":getImageUrl('appetizers', 'scallops.webp'),
        "description": "Tender scallops seared to perfection, served with a lemon butter sauce.",
        "category": "appetizers",
        "rating": 4
    },
       {
        "id": 4,
        "name": "Avocado boiled eggs toast",
        "macros" : {
            "calories": 350,
            "carbs": 20,
            "protein": 20,
            "fat": 15
        },
        "price": 15,
        "image":getImageUrl('breakfast', 'avocado_boiled_eggs_toast.webp'),
        "description": "A healthy breakfast option with creamy avocado and perfectly boiled eggs on toast.",
        "category": "breakfast",
        "rating": 4
    },
      {
        "id": 5,
        "name": "Avocado eggs hummus arugula",
        "macros" : {
            "calories": 350,
            "carbs": 7,
            "protein": 20,
            "fat": 25
        },
        "price": 15,
        "image":getImageUrl('breakfast', 'eggs_avocado_arugula.webp'),
        "description": "A nutritious breakfast bowl with avocado, eggs, hummus, and fresh arugula.",
        "category": "breakfast",
        "rating": 4
    },
     {
        "id": 6,
        "name": "Poached eggs with smoked Salmon",
        "macros" : {
            "calories": 400,
            "carbs": 2,
            "protein": 30,
            "fat": 30
        },
        "price": 25,
        "image":getImageUrl('breakfast', 'poached_eggs_salmon.webp'),
        "description": "A luxurious breakfast of poached eggs served with smoked salmon on a bed of greens.",
        "category": "breakfast",
        "rating": 4.5
    },
     {
        "id": 7,
        "name": "Scrumbled Eggs avocado arugula",
        "macros" : {
            "calories": 400,
            "carbs": 15,
            "protein": 20,
            "fat": 25
        },
        "price": 20,
        "image":getImageUrl('breakfast', 'scrumbled_eggs_avocado_arugula.webp'),
        "description": "A hearty breakfast of scrambled eggs with avocado and arugula.",
        "category": "breakfast",
        "rating": 4
    },
     {
        "id": 8,
        "name": "Scrumbled eggs avocado toast",
        "macros" : {
            "calories": 400,
            "carbs": 15,
            "protein": 15,
            "fat": 20
        },
        "price": 15,
        "image":getImageUrl('breakfast', 'scrumbled_eggs_avocado_eggs.webp'),
        "description": "A delicious breakfast of scrambled eggs served on avocado toast.",
        "category": "breakfast",
        "rating": 4.3
    },
     {   
        "id": 9,
        "name": "Cream Chesse Strawberries with dark chocolate",
        "macros" : {
            "calories": 250,
            "carbs": 5,
            "protein": 12,
            "fat": 25
        },
        "price": 15,
        "image":getImageUrl('desserts', 'cream_cheese_fruits.webp'),
        "description": "A delightful dessert of cream cheese topped with fresh strawberries and drizzled with dark chocolate.",
        "category": "desserts",
        "rating": 4
    },
      {
        "id": 10,
        "name": "low carb cheesecake",
        "macros" : {
            "calories": 250,
            "carbs": 5,
            "protein": 10,
            "fat": 25
        },
        "price": 12,
        "image":getImageUrl('desserts', 'cupcakes.webp'),
        "description": "A rich and creamy low-carb cheesecake, perfect for satisfying your sweet tooth without the guilt.",
        "category": "desserts",
        "rating": 4
    },
         {
        "id": 11,
        "name": "lowe carb tarts",
        "macros" : {
            "calories": 200,
            "carbs": 7,
            "protein": 8,
            "fat": 15
        },
        "price": 12,
        "image":getImageUrl('desserts', 'tarts.webp'),
        "description": "Delicious low-carb tarts filled with a variety of flavors, perfect for a light dessert.",
        "category": "desserts",
        "rating": 4
    },
        {
        "id": 12,
        "name": "Beff avocado salad",
        "macros" : {
            "calories": 450,
            "carbs": 5,
            "protein": 35,
            "fat": 20
        },
        "price": 15,
        "image":getImageUrl('salads', 'beef_avocado.webp'),
        "description": "A refreshing salad with tender beef slices, creamy avocado, and a light dressing.",
        "category": "dinner",
        "rating": 4
    },
      {
        "id": 54,
        "name": "Beff souvlaki",
        "macros" : {
            "calories": 350,
            "carbs": 2,
            "protein": 25,
            "fat": 25
        },
        "price": 15,
        "image":getImageUrl('dinner', 'beef_peppers.webp'),
        "description": "Juicy beef souvlaki skewers served with grilled peppers and a side of tzatziki sauce.",
        "category": "dinner",
        "rating": 4
    },
      {
        "id": 13,
        "name": "Chicken with roasted vegetables with sweet potato puree",
        "macros" : {
            "calories": 500,
            "carbs": 15,
            "protein": 35,
            "fat": 10
        },
        "price": 20,
        "image":getImageUrl('dinner', 'chicken_roasted_veggies.webp'),
        "description": "A wholesome dish of grilled chicken served with roasted vegetables and a creamy sweet potato puree.",
        "category": "dinner",
        "rating": 4
    },
     {
        "id": 14,
        "name": "Roasted fish with vegetables and califlower puree",
        "macros" : {
            "calories": 400,
            "carbs": 5,
            "protein": 40,
            "fat": 10
        },
        "price": 20,
        "image":getImageUrl('dinner', 'fish_roasted_veggies_puree.webp'),
        "description": "A light and healthy dish of roasted fish served with seasonal vegetables and a smooth cauliflower puree.",
        "category": "dinner",
        "rating": 4.4
    },
       {
        "id": 15,
        "name": "Fish with roasted vegetables",
        "macros" : {
            "calories": 370,
            "carbs": 5,
            "protein": 40,
            "fat": 10
        },
        "price": 20,
        "image":getImageUrl('dinner', 'fish_roasted_veggies.webp'),
        "description": "A flavorful dish of fish served with a medley of roasted vegetables, perfect for a healthy dinner.",
        "category": "dinner",
        "rating": 4
    },
     {
        "id": 16,
        "name": "Grilled chicken with vegetables",
        "macros" : {
            "calories": 300,
            "carbs": 5,
            "protein": 40,
            "fat": 10
        },
        "price": 20,
        "image":getImageUrl('dinner', 'grilled_chicken_veggies.webp'),
        "description": "A simple yet delicious dish of grilled chicken served with a side of fresh vegetables.",
        "category": "dinner",
        "rating": 4
    },
     {
        "id": 17,
        "name": "Hallumi with vegetables",
        "macros" : {
            "calories": 350,
            "carbs": 5,
            "protein": 20,
            "fat": 10
        },
        "price": 20,
        "image":getImageUrl('dinner', 'hallumi_veggies.webp'),
        "description": "A vegetarian delight of grilled halloumi cheese served with a variety of roasted vegetables.",
        "category": "dinner",
        "rating": 3.6
    },
      {
        "id": 18,
        "name": "Pork with roasted vegetables",
        "macros" : {
            "calories": 500,
            "carbs": 5,
            "protein": 40,
            "fat": 25
        },
        "price": 20,
        "image":getImageUrl('dinner', 'hallumi_veggies.webp'),
        "description": "A hearty dish of pork served with a side of roasted vegetables, perfect for meat lovers.",
        "category": "dinner",
        "rating": 4
    },
       {
        "id": 19,
        "name": "Salmon and vegetables",
        "macros" : {
            "calories": 400,
            "carbs": 5,
            "protein": 30,
            "fat": 20
        },
        "price": 30,
        "image":getImageUrl('dinner', 'salmon_avocado_veggies.webp'),
        "description": "A nutritious dish of salmon served with fresh vegetables.",
        "category": "dinner",
        "rating": 4.5
    },
     {
        "id": 20,
        "name": "Salmon with vegetables and avocado",
        "macros" : {
            "calories": 450,
            "carbs": 5,
            "protein": 30,
            "fat": 25
        },
        "price": 30,
        "image":getImageUrl('dinner', 'salmon_avocado.webp'),
        "description": "A delicious dish of salmon served with a side of vegetables and creamy avocado.",
        "category": "dinner",
        "rating": 4
    },
     {
        "id": 21,
        "name": "Salmon with roasted vegetables",
        "macros" : {
            "calories": 350,
            "carbs": 5,
            "protein": 30,
            "fat": 25
        },
        "price": 30,
        "image":getImageUrl('dinner', 'salmon_roasted_veggies.webp'),
        "description": "A flavorful dish of salmon served with a side of roasted vegetables, perfect for a healthy dinner.",
        "category": "dinner",
        "rating": 4
    },
       {
        "id": 22,
        "name": "Salmon with vegetables and mashed potatoes",
        "macros" : {
            "calories": 450,
            "carbs": 20,
            "protein": 30,
            "fat": 15
        },
        "price": 30,
        "image":getImageUrl('dinner', 'salmon_veggies.webp'),
        "description": "A comforting dish of salmon served with fresh vegetables and creamy mashed potatoes.",
        "category": "dinner",
        "rating": 4
    },
     {
        "id": 23,
        "name": "Salmon with zucchini and greek yogurt sauce",
        "macros" : {
            "calories": 400,
            "carbs": 5,
            "protein": 30,
            "fat": 20
        },
        "price": 30,
        "image":getImageUrl('dinner', 'salmon_zucchini.webp'),
        "description": "A light and healthy dish of salmon served with zucchini and a tangy Greek yogurt sauce.",
        "category": "dinner",
        "rating": 4
    },
     {
        "id": 24,
        "name": "Salmon with zucchini and greek yogurt sauce",
        "macros" : {
            "calories": 400,
            "carbs": 5,
            "protein": 30,
            "fat": 20
        },
        "price": 30,
        "image":getImageUrl('dinner', 'salmon_zucchini.webp'),
        "description": "A light and healthy dish of salmon served with zucchini and a tangy Greek yogurt sauce.",
        "category": "dinner",
        "rating": 4
    },
      {
        "id": 25,
        "name": "Avocado cheakpeas salad",
        "macros" : {
            "calories": 300,
            "carbs": 15,
            "protein": 15,
            "fat": 13
        },
        "price": 15,
        "image":getImageUrl('salads', 'avocado_cheekpeas.webp'),
        "description": "A refreshing salad with creamy avocado and protein-packed chickpeas, perfect for a light meal.",
        "category": "salads",
        "rating": 3
    },
     {
        "id": 26,
        "name": "cherry tomatoes salad",
        "macros" : {
            "calories": 150,
            "carbs": 15,
            "protein": 4,
            "fat": 5
        },
        "price": 10,
        "image":getImageUrl('salads', 'cherry_tomatoes.webp'),
        "description": "A simple and fresh salad made with ripe cherry tomatoes, perfect as a side dish.",
        "category": "salads",
        "rating": 4
    },
    {
        "id": 27,
        "name": "chicken eddamame eggs salad",
        "macros" : {
            "calories": 500,
            "carbs": 7,
            "protein": 40,
            "fat": 20
        },
        "price": 25,
        "image":getImageUrl('salads', 'chicken_egg_veggies.webp'),
        "description": "A protein-packed salad with tender chicken, edamame, and hard-boiled eggs, perfect for a filling meal.",
        "category": "salads",
        "rating": 4
    },
      {
        "id": 28,
        "name": "chicken rice veggies salad",
        "macros" : {
            "calories": 500,
            "carbs": 25,
            "protein": 30,
            "fat": 15
        },
        "price": 25,
        "image":getImageUrl('salads', 'chicken_tomatoes.webp'),
        "description": "A hearty salad with grilled chicken, rice, and fresh vegetables, perfect for a satisfying meal.",
        "category": "salads",
        "rating": 4
    },
       {
        "id": 29,
        "name": "Cucumber zucchini eddamame salad",
        "macros" : {
            "calories": 250,
            "carbs": 10,
            "protein": 10,
            "fat": 5
        },
        "price": 15,
        "image":getImageUrl('salads', 'cucumber_soyBeans.webp'),
        "description": "A light and refreshing salad with cucumbers, zucchini, and edamame, perfect for a healthy side.",
        "category": "salads",
        "rating": 4
    },
       {
        "id": 30,
        "name": "Kale eggs cherry tomatoes salad",
        "macros" : {
            "calories": 350,
            "carbs": 5,
            "protein": 20,
            "fat": 10
        },
        "price": 15,
        "image":getImageUrl('salads', 'kale_eggs.webp'),
        "description": "A nutritious salad with kale, hard-boiled eggs, and cherry tomatoes, perfect for a light lunch.",
        "category": "salads",
        "rating": 4
    },
      {
        "id": 31,
        "name": "Kale apple pomegranate salad",
        "macros" : {
            "calories": 200,
            "carbs": 15,
            "protein": 5,
            "fat": 3
        },
        "price": 15,
        "image":getImageUrl('salads', 'kale_pomegranate.webp'), 
        "description": "A vibrant salad with kale, sweet apples, and tart pomegranate seeds, perfect for a refreshing side.",
        "category": "salads",
        "rating": 4
    },
     {
        "id": 32,
        "name": "raw veggies rainbow salad",
        "macros" : {
            "calories": 200,
            "carbs": 30,
            "protein": 5,
            "fat": 3
        },
        "price": 15,
        "image":getImageUrl('salads', 'raw_veggies.webp'),  
        "description": "A colorful salad made with a variety of raw vegetables, perfect for a healthy and crunchy side dish.",
        "category": "salads",
        "rating": 3.5
    },
        {
        "id": 33,
        "name": "Salmon eddamame cashew veggies salad",
        "macros" : {
            "calories": 450,
            "carbs": 10,
            "protein": 30,
            "fat": 20
        },
        "price": 30,
        "image":getImageUrl('salads', 'salmon_soyBeans_carrot.webp'), 
        "description": "A delicious salad with salmon, edamame, cashews, and fresh vegetables, perfect for a nutritious meal.",
        "category": "salads",
        "rating": 4
    },
     {
        "id": 34,
        "name": "Sushi salad",
        "macros" : {
            "calories": 450,
            "carbs": 15,
            "protein": 25,
            "fat": 20
        },
        "price": 35,
        "image":getImageUrl('salads', 'salmon_soyBeans.webp'), 
        "description": "A unique salad inspired by sushi, with fresh fish, vegetables, and a tangy dressing.",
        "category": "salads",
        "rating": 4
    },
    {
        "id": 35,
        "name": "Shrimp salad",
        "macros" : {
            "calories": 350,
            "carbs": 15,
            "protein": 25,
            "fat": 20
        },
        "price": 30,
        "image":getImageUrl('salads', 'shrimp.webp'), 
        "description": "A light and refreshing salad with succulent shrimp, fresh vegetables, and a zesty dressing.",
        "category": "salads",
        "rating": 4
    },
        {
        "id": 36,
        "name": "Blackberries coconut smoothies",
        "macros" : {
            "calories": 200,
            "carbs": 15,
            "protein": 5,
            "fat": 4
        },
        "price": 25,
        "image":getImageUrl('smoothies', 'blackberries_coconut.webp'), 
        "description": "A refreshing smoothie made with blackberries and coconut, perfect for a healthy snack.",
        "category": "smoothies",
        "rating": 4
    },
         {
        "id": 37,
        "name": "Kale and greens smoothie",
        "macros" : {
            "calories": 100,
            "carbs": 15,
            "protein": 5,
            "fat": 3
        },
        "price": 15,
        "image":getImageUrl('smoothies', 'kale.webp'), 
        "description": "A nutritious smoothie packed with kale and greens, perfect for a healthy boost.",
        "category": "smoothies",
        "rating": 4
    },
       {
        "id": 38,
        "name": "Pineapple mango smoothie",
        "macros" : {
            "calories": 100,
            "carbs": 18,
            "protein": 5,
            "fat": 3
        },
        "price": 15,
        "image":getImageUrl('smoothies', 'pineaple_mango.webp'), 
        "description": "A tropical smoothie made with pineapple and mango, perfect for a refreshing treat.",
        "category": "smoothies",
        "rating": 4
    },
    {
        "id": 39,
        "name": "Pineapple strawberries smoothie",
        "macros" : {
            "calories": 100,
            "carbs": 18,
            "protein": 5,
            "fat": 3
        },
        "price": 15,
        "image":getImageUrl('smoothies', 'pineaple_strawberry.webp'), 
        "description": "A delicious smoothie made with pineapple and strawberries, perfect for a fruity refreshment.",
        "category": "smoothies",
        "rating": 4
    },
    {
        "id": 40,
        "name": "Rasberries strawberries lime smoothie",
        "macros" : {
            "calories": 80,
            "carbs": 5,
            "protein": 3,
            "fat": 3
        },
        "price": 15,
        "image":getImageUrl('smoothies', 'rasberries_bstrawberries_lime.webp'), 
        "description": "A tangy and refreshing smoothie made with raspberries, strawberries, and lime, perfect for a summer treat.",
        "category": "smoothies",
        "rating": 4
    },
       {
        "id": 41,
        "name": "Rasberries strawberries smoothie",
        "macros" : {
            "calories": 80,
            "carbs": 5,
            "protein": 5,
            "fat": 3
        },
        "price": 15,
        "image":getImageUrl('smoothies', 'rasberries_strawberry.webp'), 
        "description": "A sweet and tangy smoothie made with raspberries and strawberries, perfect for a healthy snack.",
        "category": "smoothies",
        "rating": 4.4
    },
     {
        "id": 42,
        "name": "Mix berries smoothie",
        "macros" : {
            "calories":100,
            "carbs": 5,
            "protein": 5,
            "fat": 3
        },
        "price": 15,
        "image":getImageUrl('smoothies', 'rasberries.webp'), 
        "description": "A delicious smoothie made with a mix of berries, perfect for a refreshing and healthy drink.",
        "category": "smoothies",
        "rating": 4
    },
        {
        "id": 43,
        "name": "Strawberries coconut smoothie",
        "macros" : {
            "calories":150,
            "carbs": 5,
            "protein": 5,
            "fat": 10
        },
        "price": 15,
        "image":getImageUrl('smoothies', 'strawberry.webp'), 
        "description": "A creamy smoothie made with strawberries and coconut, perfect for a tropical treat.",
        "category": "smoothies",
        "rating": 4.7
    },
     {
        "id": 44,
        "name": "Banana pistachio blueberries cashews yogurt bowl",
        "macros" : {
            "calories":500,
            "carbs": 10,
            "protein": 20,
            "fat": 25
        },
        "price": 25,
        "image":getImageUrl('yogurtBowls', 'banana_blueberries_cashew.webp'), 
        "description": "A delicious yogurt bowl topped with banana, pistachios, blueberries, and cashews, perfect for a healthy breakfast.",
        "category": "yogurt bowls",
        "rating": 4
    },
         {
        "id": 45,
        "name": "Berries banana almonds yogurt bowl",
        "macros" : {
            "calories":450,
            "carbs": 10,
            "protein": 20,
            "fat": 25
        },
        "price": 25,
        "image":getImageUrl('yogurtBowls', 'berries_banana_almonds.webp'), 
        "description": "A nutritious yogurt bowl topped with mixed berries, banana, and almonds, perfect for a healthy snack.",
        "category": "yogurt bowls",
        "rating": 4
    },
         {
        "id": 46,
        "name": "Berries coconut cherries yogurt bowl",
        "macros" : {
            "calories":500,
            "carbs": 10,
            "protein": 25,
            "fat": 25
        },
        "price": 25,
        "image":getImageUrl('yogurtBowls', 'berries_coconut_cherry.webp'), 
        "description": "A tropical yogurt bowl topped with berries, coconut, and cherries, perfect for a refreshing treat.",
        "category": "yogurt bowls",
        "rating": 4
    },
     {
        "id": 47,
        "name": "Blackberries blueberries coconut chia yogurt bowl",
        "macros" : {
            "calories":500,
            "carbs": 5,
            "protein": 25,
            "fat": 25
        },
        "price": 25,
        "image":getImageUrl('yogurtBowls', 'blackberries_blueberries_coconut.webp'), 
        "description": "A nutritious yogurt bowl topped with blackberries, blueberries, coconut, and chia seeds, perfect for a healthy breakfast.",
        "category": "yogurt bowls",
        "rating": 4
    },
     {
        "id": 48,
        "name": "Dragonfruit coconut banana yogurt bowl",
        "macros" : {
            "calories":450,
            "carbs": 10,
            "protein": 25,
            "fat": 25
        },
        "price": 25,
        "image":getImageUrl('yogurtBowls', 'dragonfruit_banana_coconut.webp'), 
        "description": "A vibrant yogurt bowl topped with dragonfruit, coconut, and banana, perfect for a tropical breakfast.",
        "category": "yogurt bowls",
        "rating": 5
    },
     {
        "id": 49,
        "name": "Kiwi blueberries cocoa yogurt bowl",
        "macros" : {
            "calories":400,
            "carbs": 8,
            "protein": 20,
            "fat": 25
        },
        "price": 20,
        "image":getImageUrl('yogurtBowls', 'kiwi_cocoa_blueberries.webp'), 
        "description": "A delicious yogurt bowl topped with kiwi, blueberries, and a sprinkle of cocoa, perfect for a healthy snack.",
        "category": "yogurt bowls",
        "rating": 4
    },
      {
        "id": 50,
        "name": "Matcha coconut banana yogurt bowl",
        "macros" : {
            "calories":400,
            "carbs": 8,
            "protein": 20,
            "fat": 25
        },
        "price": 30,
        "image":getImageUrl('yogurtBowls', 'matcha_coconut_banana.webp'),   
        "description": "A refreshing yogurt bowl topped with matcha, coconut, and banana, perfect for a healthy breakfast.",
        "category": "yogurt bowls",
        "rating": 4
    },
    {
        "id": 51,
        "name": "Spirulina banana yogurt bowl",
        "macros" : {
            "calories":400,
            "carbs": 8,
            "protein": 20,
            "fat": 15
        },
        "price": 30,
        "image":getImageUrl('yogurtBowls', 'spirulina_banana.webp'), 
        "description": "A nutritious yogurt bowl topped with spirulina and banana, perfect for a healthy snack.",
        "category": "yogurt bowls",
        "rating": 4
    },
    {
        "id": 52,
        "name": "Strawberries chia seeds goji yogurt bowl",
        "macros" : {
            "calories":400,
            "carbs": 8,
            "protein": 20,
            "fat": 15
        },
        "price": 30,    
        "image":getImageUrl('yogurtBowls', 'strawberries_chia_goji.webp'), 
        "description": "A delicious yogurt bowl topped with strawberries, chia seeds, and goji berries, perfect for a healthy breakfast.",
        "category": "yogurt bowls",
        "rating": 4
    },
     {
        "id": 53,
        "name": "Strawberries banana rasberries chia seeds yogurt bowl",
        "macros" : {
            "calories":450,
            "carbs": 15,
            "protein": 20,
            "fat": 15
        },
        "price": 25,
        "image":getImageUrl('yogurtBowls', 'strawberry_banana_rasberries.webp'), 
        "description": "A fruity yogurt bowl topped with strawberries, banana, raspberries, and chia seeds, perfect for a refreshing snack.",
        "category": "yogurt bowls",
        "rating": 4
    }           
]

export default menu;