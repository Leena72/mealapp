export const TOGGLE_FAVORITE='TOGGLE_FAVORITE'; //contstant
export const FILTER='FILTER'; 

export const toggleFavorite = (id)=>{
    return {type: TOGGLE_FAVORITE, mealID:id};
}

export const filter = (filterMeals)=>{
    return {type: FILTER, filters:filterMeals};
}
