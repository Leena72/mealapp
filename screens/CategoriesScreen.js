import React, { Component } from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'

const CategoriesScreen = props => { console.log("props",props)
    return (
        <View style={styles.screen}>
            <Text>
                Categorries screen
            </Text>
            <Button title="Go To Meal Screen" onPress={()=>{
                props.navigation.navigate({routeName:'CategoryMealScreen'})
                // props.navigation.push('CategoryMealScreen') // another method to navigate
                        // props.navigation.replace('CategoryMealScreen') // replace a screen not add in stack
                }}/>
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
export default CategoriesScreen