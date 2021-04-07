import React from 'react'
import MealList from '../components/MealList'
import {MEAL} from '../data/dummyData'


const FavouriteScreen = props => {
    const favMeal= MEAL.filter(meal=>meal.id === 'm1' || meal.id === 'm2')
    return (
       <MealList data={favMeal} navigation={props.navigation}/>
    )
};

FavouriteScreen.navigationOptions = {
    headerTitle: 'Favorite Meal',

}


export default FavouriteScreen


