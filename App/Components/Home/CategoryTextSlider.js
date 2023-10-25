import { View, Text, FlatList, TouchableOpacity,StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Color from '../../Shared/Color'

export default function CategoryTextSlider({selectCategory}) {
  const [active,setActive]=useState(1)
  const CategoryList=[
    {
      id:1,
      name:'Latest'
    },
    {
      id:2,
      name:'World'

    },
    {
      id:3,
      name:'Business'
    },
    {
      id:4,
      name:'intertainment'

    },
    {
      id:5,
      name:'Life'
    },
    {
      id:6,
      name:'Movies'

    },
    

  ]
  const OnCategoryClick=(id)=>{
    setActive(id)
  }
  return (
    <View style={{marginTop:10}} >
      <FlatList 
      data = {CategoryList}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem = {({item}) =>(
        <TouchableOpacity onPress={()=>{OnCategoryClick(item.id);
           selectCategory(item.name)}}>
        <Text  style={ item.id==active?styles.selecttext
           : styles.unselecttext}>{item.name} </Text>
        </TouchableOpacity>

      )} />
    </View>
  )
}
const styles = StyleSheet.create({
  unselecttext:{

    marginRight:10,
      fontSize:18,
      fontWeight:'800',
      color:'black'
      
  },
  selecttext:{

    marginRight:10,
      fontSize:18,
      fontWeight:'900',
      color:Color.royalblue
      
  }
})
