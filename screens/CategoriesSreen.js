import React, { Component } from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'

const CategoriesSreen = props => {
    return (
        <View style={styles.screen}>
            <Text>
                Categorries screen
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
export default CategoriesSreen