import React, { Component } from 'react'
import { View, Button, Text, StyleSheet, FlatList, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native'

const CategoryGridTile = props => {

    let TouchableComponent = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComponent = TouchableNativeFeedback;
    }

    return (
        <View style={styles.gridItem} >
            <TouchableComponent style={styles.TouchableComponent} onPress={props.onSelect}>
                <View style={{ ...styles.container, ...{ backgroundColor: props.color } }} >
                    <Text style={styles.title}>
                        {props.title}
                    </Text>
                </View>
            </TouchableComponent>
        </View>

    );
};


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
        // borderRadius: 10,
        // borderWidth: 1,
        // borderColor: '#000'
    },
    container: {
        flex: 1,
        shadowColor: '#000',
        shadowOpacity: 0.26,
        shadowOffset: {
            width: 0, height: 2
        },
        shadowRadius: 10,
        elevation: 3,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    TouchableComponent: {
        flex: 1
    }


})
export default CategoryGridTile