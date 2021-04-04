import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen' 
import CategoryMealScreen from '../screens/CategoryMealScreen' 
import DetailScreen from '../screens/DetailScreen' 

const MealsNavigator =createStackNavigator({
    CategoriesScreen:CategoriesScreen,
    CategoryMealScreen:{
        screen:CategoryMealScreen},
    DetailScreen:DetailScreen
})

export default createAppContainer(MealsNavigator)