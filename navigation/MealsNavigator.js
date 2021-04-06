import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealScreen from '../screens/CategoryMealScreen'
import DetailScreen from '../screens/DetailScreen'
import FavouriteScreen from '../screens/FavouriteScreen'
import Colors from '../Constant/Color'
import { Ionicons } from '@expo/vector-icons'
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
);


const MealFavTabNavigator = createBottomTabNavigator({
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-restaurant" size={20} color={tabInfo.tintColor} />
            }
        }
    },
    Favorite: {
        screen: FavouriteScreen,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-star" size={20} color={tabInfo.tintColor} />
            }
        }
    }
},
    {
        // initialRouteName:'CategoryMealScreen',
        tabBarOptions: {
            activeTintColor: Colors.accentColor
        }
    }
);


//nested navigators MealFavTabNavigator(root navigator) --> MealsNavigator
export default createAppContainer(MealFavTabNavigator)