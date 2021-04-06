import React, { Component } from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'
import { CATEGORIES, MEAL } from '../data/dummyData'

const DetailScreen = props => {
    const mealID=props.navigation.getParam('mealID');
    const selectedMeal = MEAL.find(meal => meal.id === mealID)

    return (
        <View style={styles.screen}>
            <Text>
           {selectedMeal.title}
            </Text>
            <Button title="Go Back" onPress={()=>{props.navigation.popToTop()}}/> 
        </View>
    )
};

DetailScreen.navigationOption = (navigationData) =>{
    const mealID= navigationData.navigation.getParam('mealID')
    const selectedMeal = MEAL.find(meal => meal.id === mealID)
    console.log("selectedMeal",selectedMeal)
    return{
     headerTitle:selectedMeal.title,
    }
}

const styles = StyleSheet.create({
screen:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
}
})
export default DetailScreen