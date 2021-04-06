import Category from '../models/category';
import Meal from '../models/meal';

export const CATEGORIES = [
    new Category('c1', 'Indian', '#f5428d'),
    new Category('c2', 'Italian', '#f54242'),
    new Category('c3', 'Chinees', '#f5a442'),
    new Category('c4', 'Light & Lovely', '#368dff')
]

export const MEAL = [
    new Meal('m1',
        ['c1', 'c2'],
        'Asparagus Salad with tomatoes',
        'luxurious',
        'simple',
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2010%2F05%2F17%2Ftomato-salad-su-x.jpg',
        30,
        ['salt,pepper,olive oil', 'Salad', '30gm cherry', 'Nuts', 'White and Green asparagus'],
        ['Wash , peel and cut asparagus', ' Cook in salted water', 'Salt and pepper the asparagus', 'Roast the pine nuts', 'Halves the tomatoes', 'Mix withasparagus, salad and dresing', 'Serve'],
        true, true, true, true
    ),
    new Meal('m2',
        ['c2', 'c3'],
        'Milk oats',
        'luxurious',
        'simple',
        'https://milklife.com/sites/default/files/main_image/Recipe/2019/03/01/OvernightOats_1024x768%20_recipe%20page%20corner%20image.jpg',
        20,
        ['salt,pepper,olive oil', 'oats', '1/2 lt milk', 'Nuts', 'Honey'],
        ['Wash oats', ' Take a bowl pour milk', 'Add oats and one spoon honey', ' Stir it', 'Add Nuts', 'Mix well', 'Serve'],
        true, true, true, true
    ),
    new Meal('m3',
        ['c3', 'c4'],
        'Salad with tomatoes',
        'luxurious',
        'simple',
        'https://www.cubesnjuliennes.com/wp-content/uploads/2020/08/Easy-Healthy-Onion-Cucumber-Tomato-Salad-Recipe.jpg',
        30,
        ['salt,pepper,olive oil', 'Salad', '30gm cherry tomatoes', 'onion'],
        ['Wash , peel and cut tomatoes and onion' , ' Cook in salted water', 'Salt and pepper the tomatoes', 'salad and dresing', 'Serve'],
        true, true, true, true
    ),
    new Meal('m4',
        ['c1', 'c2', 'c3', 'c4'],
        'Asparagus Salad ',
        'luxurious',
        'simple',
        'https://www.thespruceeats.com/thmb/OSPqpm0pHH5vdZ-3WUox0KOjDRc=/2670x2670/smart/filters:no_upscale()/AsparagusSaladSpruce5-0bc8125e45534931897351c45ad0b252.jpg',
        30,
        ['salt,pepper,olive oil', 'Salad', '20gm berry', 'Nuts', 'White and Green asparagus'],
        ['Wash , peel and cut asparagus', ' Cook in salted water', 'Salt and pepper the asparagus', 'Roast the pine nuts', 'Halves the tomatoes', 'Mix withasparagus, salad and dresing', 'Serve'],
        true, true, true, true
    )
]
