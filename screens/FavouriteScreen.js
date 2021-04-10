import React from 'react'
import { View, Button, Text, StyleSheet, FlatList, TouchableOpacity, Platform } from 'react-native'
import MealList from '../components/MealList'
// import {MEAL} from '../data/dummyData' -- using useSelector 

import {useSelector} from 'react-redux'

const FavouriteScreen = props => {
   const MealSlice = useSelector(state => state.mealSlice.favoriteMeals) //coming from reducer 
   //  const favMeal= MealSlice.filter(meal=>meal.id === 'm1' || meal.id === 'm2')  -- dummy
    return (
       <MealList data={MealSlice} navigation={props.navigation}/>
    )
};

FavouriteScreen.navigationOptions = navData =>{
 return{
    headerTitle: 'Favorite Meal',
    headerLeft: 
    <Button title="=" onPress={()=>{navData.navigation.toggleDrawer()}} />
 }
}


export default FavouriteScreen


