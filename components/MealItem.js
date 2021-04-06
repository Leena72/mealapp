import React, { Component } from 'react'
import { View, Button, Text, StyleSheet, FlatList, TouchableOpacity, Platform, TouchableNativeFeedback, ImageBackground } from 'react-native'


const MealItem = props => {

    let TouchableComponent = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComponent = TouchableNativeFeedback;
    }

    return (
        <View style={styles.mealItem} >
            <TouchableComponent style={styles.TouchableComponent}
             onPress={props.onSelectMeal}
            >
                <View>
                    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                        <ImageBackground source={{ uri: props.image }} style={styles.bgImage} >
                            <Text style={styles.title}>
                                {props.title}
                            </Text>
                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                        <Text style={styles.detail}>
                            {props.duration}m
                        </Text>
                        <Text style={styles.detail}>
                            {props.complexity.toUpperCase()}
                        </Text>
                        <Text style={styles.detail}>
                            {props.affordability.toUpperCase()}
                        </Text>
                    </View>
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
    mealItem: {
borderRadius:10,
        height: 200,
        width: '90%',
        backgroundColor: '#ccc',
        marginVertical:20,
    marginHorizontal:20
        
    },
    detail: {
        fontSize: 18,
        color: '#000'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.7)',
        paddingVertical:5,
      textAlign:'center',
      


    },
    TouchableComponent: {
        flex: 1
    },
    mealRow: {
        flexDirection: 'row',
        // margin:10
        paddingVertical:10
    },
    mealHeader: {
        height: '80%'
    },
    mealDetail: {
        height: '20%',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems:'center',
      

    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent:'flex-end'
    }
})
export default MealItem