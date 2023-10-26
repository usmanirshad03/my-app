import {  SafeAreaView, ScrollView, Share, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useEffect } from 'react'
import { Image } from 'react-native'
import GlobelApi from '../Services/GlobelApi'
import Color from '../Shared/Color'
import * as WebBrowser from 'expo-web-browser';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler'
 


export default function ReadNews(props) {
  const {read}=props.route.params;
  const navigation = useNavigation();
  useEffect(()=>{
     console.log(read)
  },[])
  const shareNews=()=>{
    Share.share({
      message:read.title+"\nRead More"+read.description
    })
  }
  return (
    <ScrollView>
      <View style={{display:'flex',flexDirection:'row' ,marginBottom:5,marginTop:5,justifyContent:'space-between',backgroundColor:'white'}}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Ionicons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>shareNews()}>
        <FontAwesome5 name="share" size={24} color="black" />
        </TouchableOpacity>
        </View>
        
      
     
 
 <Image source={{uri:read?.urlToImage}} style={{width:'100%',height:300, borderRadius:30,marginBottom:10,marginTop:20,backgroundColor:'white'}}/>
 
 <Text style={{marginTop:10,fontSize:25,fontWeight:700}}>  {read.title}</Text>
 <Text style={{fontWeight:'bold',color:Color.royalblue}}>{read.source.name}</Text>
  <View><Text  style = {{  marginTop:5,fontSize:20,fontWeight:500,lineHeight: 30,}}>{read.description}</Text></View>
 <TouchableOpacity 
    onPress={()=>WebBrowser.openBrowserAsync(read.url)} >

    <Text style={{fontWeight:'bold',color:Color.royalblue}}>Read more...</Text></TouchableOpacity>

 
 
 

 </ScrollView>
  )
}

const styles = StyleSheet.create({})