import React, { Component } from 'react'
import { View, Button, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { CATEGORIES } from '../data/dummyData'


const CategoriesScreen = props => {
    console.log("props", props)

    const renderGridItem = (itemData) => {
        return(
            <TouchableOpacity style={styles.gridItem}onPress={() => {
                props.navigation.navigate({ routeName: 'CategoryMealScreen' })
            }}>
                <View >
                    <Text>
                        {itemData.item.title}
                    </Text>
                </View>
            </TouchableOpacity>
       
        );
 }

    return (
        <FlatList keyExtractor={(item, index) => item.id} data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
    )
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
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#000',
        alignItems:'center',
        justifyContent:'center'

    }

})
export default CategoriesScreen