import React from 'react'
import {FlatList,View, Text, StyleSheet,Button} from 'react-native'
import MealItem from './MealItem'

const MealList = (props) => {
    const renderMealItem = (itemData) => {
        return (

            <MealItem title={itemData.item.title} duration={itemData.item.duration}
                complexity={itemData.item.complexity} affordability={itemData.item.affordability}
                image={itemData.item.imageUrl}
                onSelectMeal={() => {
                    props.navigation.navigate({ routeName: 'DetailScreen', params: { mealID: itemData.item.id,
                    
                        mealtitle: itemData.item.title} })
                }}
            />

        );
    }
    return (
        <View style={styles.screen}>
            <FlatList style={styles.mealList} data={props.data} keyExtractor={(item, index) => item.id} renderItem={renderMealItem} />
        </View>
    )
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mealList: {
        width: '100%',
        margin: 10,

    }
})

export default MealList
