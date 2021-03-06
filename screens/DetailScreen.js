import React, { useEffect, useCallback } from 'react'
import { View, Button, ScrollView, Image, Text, StyleSheet } from 'react-native'
// import { CATEGORIES, MEAL } from '../data/dummyData'
import { useSelector, useDispatch } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'
import HeaderButton from '../components/HeaderButton'
import {
    HeaderButtons,
    Item,
    HiddenItem,
    OverflowMenu,
} from 'react-navigation-header-buttons';
import { toggleFavorite } from '../store/action/meal'

const DetailScreen = props => {
    console.log("props>>", props)
    const mealID = props.navigation.getParam('mealID');
    const MealSlice = useSelector(state => state.mealSlice.meals)
    const selectedMeal = MealSlice.find(meal => meal.id === mealID)
    const currentFavMeal = useSelector(state => state.mealSlice.filterMeals.some(meal => meal.id === mealID))

    const dispatch = useDispatch();
    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(mealID))
    }, [dispatch, mealID])

    useEffect(() => {
        // props.navigation.setParams({ mealTitle: selectedMeal.title }) // setParams is a way to communicating b/w navigation option and component

        props.navigation.setParams({ toggleFav: toggleFavoriteHandler }) // setParams is a way to communicating b/w navigation option and component

    }
        , [toggleFavoriteHandler]);

    useEffect(() => {
        // props.navigation.setParams({ mealTitle: selectedMeal.title }) // setParams is a way to communicating b/w navigation option and component

        props.navigation.setParams({ isfavMeal: currentFavMeal }) // setParams is a way to communicating b/w navigation option and component

    }
        , [currentFavMeal]);

    return (
        <ScrollView style={styles.scroll} >
            <View style={styles.container}>

                <Image source={{ uri: selectedMeal.imageUrl }} style={styles.bgImage} />
                <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                    <Text style={styles.detail}>
                        {selectedMeal.duration}m
                        </Text>
                    <Text style={styles.detail}>
                        {selectedMeal.complexity.toUpperCase()}
                    </Text>
                    <Text style={styles.detail}>
                        {selectedMeal.affordability.toUpperCase()}
                    </Text>
                </View>
                <View style={styles.pdBottom}>
                    <Text style={styles.steps}>IGREGIENT : </Text>
                    <Text> {selectedMeal.ingrdients.map(ingrdients => <Text key={ingrdients}>{ingrdients}</Text>)}</Text>

                </View>
                <View style={styles.pdBottom}>
                    <Text style={styles.steps}>LIST OF STEPS : </Text>
                    <Text> {selectedMeal.steps.map(steps => <Text key={steps}>{steps}</Text>)}</Text>

                </View>
            </View>
            {/* <View style={styles.screen}>

                <Button title="Go Back" onPress={() => { props.navigation.popToTop() }} />
            </View> */}

        </ScrollView>
    )
};


DetailScreen.navigationOptions = (navigationData) => {
    const mealID = navigationData.navigation.getParam('mealID')
    const toggleFavorite = navigationData.navigation.getParam('toggleFav')
    const avaibleMeal = navigationData.navigation.getParam('mealTitle')
    const isFavMeal = navigationData.navigation.getParam('isfavMeal')
    // const selectedMeal = mealTitle.find(meal => meal.id === mealID)
    // console.log("selectedMeal", selectedMeal)
    return {
        headerTitle: avaibleMeal,
        //  headerRight:<HeaderButtons HeaderButtonComponent={HeaderButton}>
        //      <Item title='Favorite' iconName='ios-star' onPress={()=>{console.log("mark as favorite")}}/>
        //      <OverflowMenu
        //         style={{ marginHorizontal: 10 }}

        //       >
        //       </OverflowMenu>
        //  </HeaderButtons>
        headerRight: <Ionicons name={ isFavMeal ? 'star' : 'star-outline'} size={20} onPress={toggleFavorite} />
        //  <Ionicons name="ios-star" size={20} onPress={toggleFavorite} />
        // <Button
        //     onPress={toggleFavorite}
        //     title="*"

        //     style={styles.starbtn}

        // />
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

    },
    mealRow: {
        flexDirection: 'row',
        // margin:10
        paddingVertical: 10
    },
    mealDetail: {
        height: '20%',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',


    },
    detail: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold'
    },
    steps: {
        fontSize: 18,
        color: '#000',
        lineHeight: 20,

        flexDirection: 'column',
        fontWeight: 'bold'
    },
    bgImage: {
        width: '100%',
        height: 200,
        justifyContent: 'flex-end'
    },
    container: {
        padding: 20
    },
    scroll: {
        padding: 10
    },
    pdBottom: {
        paddingBottom: 20
    }
})
export default DetailScreen