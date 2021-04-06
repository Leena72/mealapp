import React, { Component } from 'react'
import { View, Button, Text, StyleSheet, Platform, FlatList } from 'react-native'
import { CATEGORIES, MEAL } from '../data/dummyData'
import Colors from '../Constant/Color';
import MealItem from '../components/MealItem'

const CategoryMealScreen = props => {
    // console.log("props>>",props)

    const catID = props.navigation.getParam('categoryID');
    // const selectedCategory = CATEGORIES.find(cat=> cat.id ===catID)
    const displayMeal = MEAL.filter(meal => meal.categoryIDS.indexOf(catID) >= 0)
    // console.log("displayMeal",displayMeal)

    const renderMealItem = (itemData) => {
        // console.log("itemData",itemData.item.title)
        return (

            <MealItem title={itemData.item.title} duration={itemData.item.duration}
                complexity={itemData.item.complexity} affordability={itemData.item.affordability}
                image={itemData.item.imageUrl}
                onSelectMeal={() => {
                    props.navigation.navigate({ routeName: 'DetailScreen', params: { mealID: itemData.item.id } })
                }}
            />

        );
    }

    return (
        <View style={styles.screen}>
            <FlatList style={styles.mealList} data={displayMeal} keyExtractor={(item, index) => item.id} renderItem={renderMealItem} />
            {/* <Text>{displayMeal.title}</Text>
            <Button title="Go To Detail Screen" onPress={()=>{props.navigation.navigate({routeName:'DetailScreen'})}}/>
            <Button title="Go Back" onPress={()=>{props.navigation.goBack()}}/> */}
            {/* <Button title="Go Back" onPress={()=>{props.navigation.pop()}}/> go back using pop method */}
        </View>
    )
};

// navigation options can be act like function too ; as we want to access selectedCateoryTile outside the function body

CategoryMealScreen.navigationOptions = (navigationData) => {
    // console.log("navigateionData",navigationData)
    const catID = navigationData.navigation.getParam('categoryID')
    const selectedCategory = CATEGORIES.find(cat => cat.id === catID)
    return {
        headerTitle: selectedCategory.title,
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mealList: {
        width: '100%',
        margin: 10,

    }
})
export default CategoryMealScreen