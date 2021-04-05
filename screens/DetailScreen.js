import React, { Component } from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'

const DetailScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>
            DetailScreen
            </Text>
            <Button title="Go Back" onPress={()=>{props.navigation.popToTop()}}/> 
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
export default DetailScreen