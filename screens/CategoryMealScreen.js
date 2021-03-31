import React, { Component } from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'

const CategoryMealScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>
            CategoryMealScreen
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
screen:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
}
})
export default CategoryMealScreen