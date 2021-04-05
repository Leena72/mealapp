import React, { Component } from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'

const CategoryMealScreen = props => { console.log("props>>",props)
    return (
        <View style={styles.screen}>
            <Text>
            CategoryMealScreen
            </Text>
            <Button title="Go To Detail Screen" onPress={()=>{props.navigation.navigate({routeName:'DetailScreen'})}}/>
            <Button title="Go Back" onPress={()=>{props.navigation.goBack()}}/>
            {/* <Button title="Go Back" onPress={()=>{props.navigation.pop()}}/> //go back using pop method */}
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