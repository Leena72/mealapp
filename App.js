import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MealsNavigator from './navigation/MealsNavigator'
import {enableScreens} from 'react-native-screens'
import {createStore, combineReducers} from 'redux'
import mealReducer from './store/reducer/meals'
import {Provider} from 'react-redux'
enableScreens();

const rootReducer = combineReducers({
  meals:mealReducer
})
const Store = createStore(rootReducer)

export default function App() {
  return (
<Provider store={Store}><MealsNavigator/></Provider> 
  );
}

