import React, { useState } from 'react'
import { View, Button,Switch, Text, StyleSheet } from 'react-native'
import Colors from '../Constant/Color'

const FilterSwitch =props =>{
    return(
        <View style={styles.filterContainer}>
        <Text>
           {props.label}
        </Text>
      {/* for Switch we have to manage state manually , hence using useState */}
        <Switch value={props.state} 
        onValueChange={props.onChange}
        trackColor={{true:Colors.primaryColor}}
       thumbColor={Colors.primaryColor}
       />
    </View>
    )
}

const FilterScreen = props => {

    const [isGlutenFree, setisGlutenFree] = useState(false);
    const [isLactoseFree, setisLactoseFree] = useState(false);
    const [isVegan, setisVegan] = useState(false);
    const [isVegetarian, setisVegetarian] = useState(false);


    return (<View style={styles.screen}>
        <Text style={styles.detail}>Available Filters</Text>
       <FilterSwitch label='Gluten Free' state={isGlutenFree} onChange={newValue => setisGlutenFree(newValue)}/>
       <FilterSwitch label='Lactose Free' state={isLactoseFree} onChange={newValue => setisLactoseFree(newValue)}/>
       <FilterSwitch label='Vegan' state={isVegan} onChange={newValue => setisVegan(newValue)}/>
       <FilterSwitch label='Vegetarian' state={isVegetarian} onChange={newValue => setisVegetarian(newValue)}/>
   </View>
       )
};

FilterScreen.navigationOptions = {
    headerTitle: 'Filter Meal',

}

const styles = StyleSheet.create({
screen:{
    flex:1,
    // justifyContent:'center',
    alignItems:'center'
},
detail: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    textAlign:'center'
},
filterContainer:{
flexDirection:'row',
justifyContent:'space-between',
alignItems:'center',
width:'80%',
marginTop:10

}
})
export default FilterScreen