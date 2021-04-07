import React, { Component } from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'

const FilterScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>
            FilterScreen screen
            </Text>
        </View>
    )
};

FilterScreen.navigationOptions = {
    headerTitle: 'Filter Meal',

}

const styles = StyleSheet.create({
screen:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
}
})
export default FilterScreen