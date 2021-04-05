import React, { Component } from 'react'
import { View, Button, Text, StyleSheet, FlatList } from 'react-native'
import { CATEGORIES } from '../data/dummyData'

const renderGridItem = (itemData) => {
    return <View >
        <Text>
            {itemData.item.title}
        </Text>
     </View>
}
const CategoriesScreen = props => {
    console.log("props", props)
    return (
        <FlatList keyExtractor={(item, index) => item.id} data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
        // <View style={styles.screen}>
        //     <Text>
        //         Categorries screen
        //     </Text>
        //     <Button title="Go To Meal Screen" onPress={()=>{
        //         props.navigation.navigate({routeName:'CategoryMealScreen'})
        //         // props.navigation.push('CategoryMealScreen') // another method to navigate
        //                 // props.navigation.replace('CategoryMealScreen') // replace a screen not add in stack
        //         }}/>
        // </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default CategoriesScreen