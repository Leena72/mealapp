import React, { Component } from 'react'
import { View, Button, Text, StyleSheet, FlatList, TouchableOpacity, Platform } from 'react-native'
import Colors from '../Constant/Color';
import { CATEGORIES } from '../data/dummyData'
import CategoryGridTile from '../components/CategoryGridTile'


const CategoriesScreen = props => {
    console.log("props", props)

    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onSelect={()=> {
                props.navigation.navigate({ routeName: 'CategoryMealScreen' , params: { categoryID: itemData.item.id}})
            }}/>

        );
    }

    return (
        <FlatList keyExtractor={(item, index) => item.id} data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
    )
};

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Category',

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center'

    }

})
export default CategoriesScreen