// reducer i.e. function
import { MEAL } from '../../data/dummyData'
import { TOGGLE_FAVORITE } from '../action/meal'

const initialState = {
    meals: MEAL,
    filterMeals: MEAL,
    favoriteMeals: []
}

const mealReducer = (state = initialState, action) => {

    switch (action.type) {
        case TOGGLE_FAVORITE:
            const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealID)
            if (existingIndex >= 0)
             {
                const updateFavMeal=[...state.favoriteMeals]
                updateFavMeal.splice(existingIndex,1) 
                return{...state, favoriteMeals:updateFavMeal} }
            else { 
                const meal= state.meals.find(meal => meal.id=== action.mealID)
                return{...state,favoriteMeals:state.favoriteMeals
                .concat(meal)}
            }
        default:
            return state
    }

    return state
}

export default mealReducer