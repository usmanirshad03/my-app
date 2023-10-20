import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Color from '../Shared/Color'
import { EvilIcons } from '@expo/vector-icons';
import CategoryTextSlider from '../Components/Home/CategoryTextSlider';
import TopHeadLinesSlider from '../Components/Home/TopHeadLinesSlider';
import HeadLineList from '../Components/Home/HeadLineList';
import GlobelApi from '../Services/GlobelApi';

export default function Home() {
  const [newsList,setNewslist]=useState([])
  useEffect(()=>{
        getTopHeadlines();
  },[] )
  const getTopHeadlines=async()=>{
      const result = ( await GlobelApi.getTopHeadlines).data;
      console.log(result);
      setNewslist(result.articles)
  }
  return (
    <ScrollView style={{backgroundColor:Color.white}}>
      <View style = {{display:'flex',flexDirection:'row',justifyContent:'space-between', alignItems:'center'}}>
      <Text style={styles.appname} > Chattha News channel  </Text>
      <EvilIcons name="bell" size={24} color="black"  />
      </View>
      <CategoryTextSlider/>
      <TopHeadLinesSlider newsList={newsList}/>
      <HeadLineList newsList={newsList} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  appname:{

    fontSize:24,
    fontWeight:'bold',
    color:Color.royalblue
  }
})