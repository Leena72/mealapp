import React, { Component } from 'react'
import { View, Button, Text, StyleSheet, Platform } from 'react-native'
import { CATEGORIES } from '../data/dummyData'
import  Colors  from '../Constant/Color';

const CategoryMealScreen = props => { 
    console.log("props>>",props)

const catID=props.navigation.getParam('categoryID');
const selectedCategory = CATEGORIES.find(cat=> cat.id ===catID)

    return (
        <View style={styles.screen}>
            <Text>
            CategoryMealScreen
            </Text>
            <Text>{selectedCategory.title}</Text>
            <Button title="Go To Detail Screen" onPress={()=>{props.navigation.navigate({routeName:'DetailScreen'})}}/>
            <Button title="Go Back" onPress={()=>{props.navigation.goBack()}}/>
            {/* <Button title="Go Back" onPress={()=>{props.navigation.pop()}}/> go back using pop method */}
        </View>
    )
};

// navigation options can be act like function too ; as we want to access selectedCateoryTile outside the function body

CategoryMealScreen.navigationOptions=(navigationData)=>{
    console.log("navigateionData",navigationData)
   const catID= navigationData.navigation.getParam('categoryID')
   const selectedCategory = CATEGORIES.find(cat=> cat.id ===catID)
   return{
    headerTitle:selectedCategory.title,
   }
}

const styles = StyleSheet.create({
screen:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
}
})
export default CategoryMealScreen