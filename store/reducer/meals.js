// reducer i.e. function
import {MEAL} from '../../data/dummyData'

const initialState ={
    meals:MEAL,
    filterMeals:MEAL,
    favoriteMeals:[]
}

const mealReducer = (state=initialState, action) =>{
    return state
}

export default mealReducer