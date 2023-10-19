
import React, { useEffect, useState } from 'react'
import { View,Text, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native'
import GlobelApi from '../../Services/GlobelApi'
import Color from '../../Shared/Color'

export default function TopHeadLinesSlider({newsList}) {
    
  return (
    <View style={{margin:10}}>
       <FlatList 
          data = {newsList}
          horizontal
          renderItem={({item}) =>(
            <TouchableOpacity onPress={()=>console.log('Click')} style ={{width:Dimensions.get('screen').width*0.80,marginRight:15}}>
                <Image source={{uri:item.urlToImage}} style={{height:Dimensions.get('screen').height*0.3,borderRadius:10}}/>
                <Text numberOfLines={3} style = {{  marginTop:5,fontSize:25,fontWeight:500}}>{item.title}</Text>
                <Text style={{color:Color.royalblue}}>{item?.source?.name}</Text>
            </TouchableOpacity>
          )} />
         
    </View>
  )
}