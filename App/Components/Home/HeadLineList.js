import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Color from '../../Shared/Color'
import { useNavigation } from '@react-navigation/native';

export default function HeadLineList({newsList}) {
  const navigation = useNavigation(); 
  
  return (
    
     
      <View>
      <FlatList 
      data= {newsList}

      renderItem={({item})=>(
        <View>
           
        
        <TouchableOpacity 
        onPress={()=>navigation.navigate('read-news',{read:item}) } 
        style={{marginTop:15, display:'flex', flexDirection:'row',backgroundColor:'white'}} >
          <Image source={{uri:item.urlToImage}}
             style={{width:130,height:130,borderRadius:10, }}
            />
             <View style={{marginRight:130,marginLeft:10}}>
             <Text numberOfLines={4}  style = {{  fontSize:20, fontWeight:'bold'}} >{item.title} </Text>
             <Text style={{color:Color.royalblue, marginTop:5}}>{item.source.name}</Text>
             </View>
        </TouchableOpacity>
        <View style={{height:1, backgroundColor:Color.lightslategrey, marginTop:10, marginLeft:-20}}></View>
        </View>
        
        )}
        />
     </View>     
  )
}
