import React  from 'react'
import {useSelector} from 'react-redux'
//useSelector -- inplace of mapStatetoprops mapdispatch connect 
import { CATEGORIES,
    // MEAL  --importing from redux store
     } from '../data/dummyData'
import MealList from '../components/MealList'

const CategoryMealScreen = props => {
    const catID = props.navigation.getParam('categoryID');
    const MealSlice = useSelector(state => state.mealSlice.filterMeals)

    const displayMeal = MealSlice.filter(meal => meal.categoryIDS.indexOf(catID) >= 0)
    

    return (
     
        <MealList data={displayMeal} navigation={props.navigation}/>
    )
};

// navigation options can be act like function too ; as we want to access selectedCateoryTile outside the function body

CategoryMealScreen.navigationOptions = (navigationData) => {
    const catID = navigationData.navigation.getParam('categoryID')
    const selectedCategory = CATEGORIES.find(cat => cat.id === catID)
    return {
        headerTitle: selectedCategory.title,
    }
}

export default CategoryMealScreen