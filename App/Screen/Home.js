import { View, Text, StyleSheet, ScrollView, ActivityIndicator, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import Color from '../Shared/Color'
import { EvilIcons } from '@expo/vector-icons';
import CategoryTextSlider from '../Components/Home/CategoryTextSlider';
import TopHeadLinesSlider from '../Components/Home/TopHeadLinesSlider';
import HeadLineList from '../Components/Home/HeadLineList';
import GlobelApi from '../Services/GlobelApi';

export default function Home() {
  const [newsList,setNewslist]=useState([])
  const [loading,setLoading]=useState([])
 
  useEffect(()=>{
      //  getTopHeadlines();
       getNewsByCategory('latest');
  },[] )

  const getNewsByCategory=async(category)=>{
    setLoading(true);
      const result = ( await GlobelApi.getByCategory(category)).data;
      
      setNewslist(result.articles)
    setLoading(false);
  }
  const getTopHeadlines=async()=>{
    const result = (await GlobelApi.getTopHeadlines.data);
    console.log(result)
    setNewslist(result.articles)
  }
  return (
    <ScrollView style={{backgroundColor:Color.white}}>
     
      <View style = {{display:'flex',flexDirection:'row',justifyContent:'space-between', alignItems:'center'}}>
      <Text style={styles.appname} > Chattha News Channel  </Text>
      <EvilIcons name="bell" size={24} color="black"  />
      </View>
      <CategoryTextSlider  selectCategory={(category)=>getNewsByCategory(category)}/>
      { loading?<ActivityIndicator style={{marginTop:Dimensions.get('screen').height*0.40}} size={'large'} color={Color.lightslategrey}/>:
      <View>
      <TopHeadLinesSlider newsList={newsList}/>
      <HeadLineList newsList={newsList} />
      </View>
}

    </ScrollView>
  )
}
const styles = StyleSheet.create({
  appname:{

    fontSize:26,
    fontWeight:'bold',
    color:Color.royalblue
  }
})