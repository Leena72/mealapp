import React from 'react'
import MealList from '../components/MealList'

const FavouriteScreen = props => {
    return (
       <MealList/>
    )
};

FavouriteScreen.navigationOptions = {
    headerTitle: 'Favorite Meal',

}


export default FavouriteScreen