import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Color from '../Shared/Color'
import { EvilIcons } from '@expo/vector-icons';
import CategoryTextSlider from '../Components/Home/CategoryTextSlider';
import TopHeadLinesSlider from '../Components/Home/TopHeadLinesSlider';

export default function Home() {
  return (
    <View>
      <View style = {{display:'flex',flexDirection:'row',justifyContent:'space-between', alignItems:'center'}}>
      <Text style={styles.appname} > Chattha News channel  </Text>
      <EvilIcons name="bell" size={24} color="black"  />
      </View>
      <CategoryTextSlider/>
      <TopHeadLinesSlider/>
    </View>
  )
}
const styles = StyleSheet.create({
  appname:{

    fontSize:24,
    fontWeight:'bold',
    color:Color.royalblue
  }
})