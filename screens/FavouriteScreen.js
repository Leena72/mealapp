import React from 'react'
import { View, Button, Text, StyleSheet, FlatList, TouchableOpacity, Platform } from 'react-native'
import MealList from '../components/MealList'
import {MEAL} from '../data/dummyData'


const FavouriteScreen = props => {
    const favMeal= MEAL.filter(meal=>meal.id === 'm1' || meal.id === 'm2')
    return (
       <MealList data={favMeal} navigation={props.navigation}/>
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


