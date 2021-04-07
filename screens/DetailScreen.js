import React, { Component } from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'
import { CATEGORIES, MEAL } from '../data/dummyData'
import HeaderButton from '../components/HeaderButton'
import {
    HeaderButtons,
    Item,
    HiddenItem,
    OverflowMenu,
} from 'react-navigation-header-buttons';

const DetailScreen = props => {
    const mealID = props.navigation.getParam('mealID');
    const selectedMeal = MEAL.find(meal => meal.id === mealID)

    return (
        <View style={styles.screen}>
            <Text>
                {selectedMeal.title}
            </Text>
            <Button title="Go Back" onPress={() => { props.navigation.popToTop() }} />
        </View>
    )
};


DetailScreen.navigationOptions = (navigationData) => {
    const mealID = navigationData.navigation.getParam('mealID')
    const selectedMeal = MEAL.find(meal => meal.id === mealID)
    console.log("selectedMeal", selectedMeal)
    return {
        headerTitle: selectedMeal.title,
        //  headerRight:<HeaderButtons HeaderButtonComponent={HeaderButton}>
        //      <Item title='Favorite' iconName='ios-star' onPress={()=>{console.log("mark as favorite")}}/>
        //      <OverflowMenu
        //         style={{ marginHorizontal: 10 }}

        //       >
        //       </OverflowMenu>
        //  </HeaderButtons>
        headerRight: <Button
            // onPress={navigation.getParam('increaseCount')}
            title="*"

            style={styles.starbtn}

        />
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    starbtn: {
        backgroundColor: '#fff',
        color: '#fff',
        fontSize: 22

    }
})
export default DetailScreen