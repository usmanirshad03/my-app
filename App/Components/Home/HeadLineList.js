import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function HeadLineList(newsList) {
  return (
    
     <View>
      <FlatList 
      data= {newsList}

      renderItem={({item})=>(
        <TouchableOpacity style={{marginTop:15}}>
          <Image source={{uri:item.urlToImage}}
             style={{width:130,height:120,borderRadius:10}}/>
        </TouchableOpacity>

      )}
      />
      </View>
      
    
  )
}
