import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealScreen from '../screens/CategoryMealScreen'
import DetailScreen from '../screens/DetailScreen'
import Colors from '../Constant/Color'
import { CATEGORIES } from '../data/dummyData'

const MealsNavigator = createStackNavigator({
    CategoriesScreen: {
        screen: CategoriesScreen,

    },
    CategoryMealScreen: {
        screen: CategoryMealScreen,

    },
    DetailScreen: {
        screen: DetailScreen,

    }
},
    {
        // initialRouteName:'CategoryMealScreen',
        defaultNavigationOptions: { // common to all header style and headerTintColor : for all screen , can be overwritten

            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '#fff',
            },
            headerTintColor: Platform.OS === 'android' ? '#fff' : Colors.primaryColor

        }
    }
)

export default createAppContainer(MealsNavigator)