import React from 'react'
import { View, Button, Text, StyleSheet, FlatList, TouchableOpacity, Platform } from 'react-native'
import MealList from '../components/MealList'
// import {MEAL} from '../data/dummyData' -- using useSelector 

import {useSelector} from 'react-redux'

const FavouriteScreen = props => {
   const MealSlice = useSelector(state => state.mealSlice.favoriteMeals) //coming from reducer 
   //  const favMeal= MealSlice.filter(meal=>meal.id === 'm1' || meal.id === 'm2')  -- dummy

   if(MealSlice.length == 0 || !MealSlice){
      return <View style={styles.screen}>
         <Text style={styles.detail}>
            No favorite meal found. Start adding some!
         </Text>
      </View>
   }

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

const styles = StyleSheet.create({
   screen: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center'
   },
   detail:{
      fontSize:22,
      padding:20
   }
})

export default FavouriteScreen


