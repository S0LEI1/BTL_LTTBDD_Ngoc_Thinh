import React from 'react'
import { View,Image, Pressable,Text, ScrollView, FlatList} from 'react-native'
import  { useEffect, useState } from "react";
import { comic_data } from "../data/comic_data";


export default function LichSuDoc({navigation,route}) {
    var [comic, setComic] = useState({});
    var getComic = () => {
      comic_data.map((item) => {
        if (item.id == route.params) {
          setComic(item);
        }
      });
    };
    useEffect(() => {
      getComic();
    });
    const deleteTruyen =(comic)=>{
        const newComic= myComicArray.filter(item => item.id !== comic.id)
        setComic(newComic);
    }
  return (
    <View  style={{flex:1,padding:10,alignItems:'center',marginLeft:'20px',backgroundColor:'#FFFF'}}>
                 <View style={{width:'100%',height:'20px',justifyContent:'flex-start',flexDirection:'row',alignItems:'center'}}>
                    <Pressable>
                    <Image style={{width:'20px',height:'12px'}} source={require('/assets/ArrowLeft.png')} />

                    </Pressable>
                   <Text style={{fontSize:12,fontWeight:'bold',color:'#CC4900',marginLeft:'15px'}} >Lịch sử của bạn</Text>
                 </View>
    <ScrollView style={{width:'100%',height:'100%',position:'absolute',marginTop:'25px'}}>
    <FlatList numColumns={1} data={comic_data} renderItem={({item}) => {
        return (
           <View style={{width:'100%',height:'135px', flexDirection:'row',marginTop:'10px' }} >
                <View style={{width:'100px',height:'130px',}}>
                    <Image  source={item.image} style={{width:'100px',height:'135px',borderRadius:7}}/>

                </View>
                <View style={{width:'60%',height:'135px',paddingLeft:10,justifyContent:'space-around'}}>
                    <Text style={{fontSize:12,fontWeight:'bold'}}>{item.name}</Text>
                    <View style={{width:'58px',height:'20px',backgroundColor:'#707070',borderRadius:5,justifyContent:'center',alignItems:'center',marginTop:'10px'}}>

                        <Text  style={{fontSize:10,fontWeight:'normal',color:'#ffff',}} >{item.chapter}</Text>
                    </View>

                    <Text style={{fontSize:10,fontWeight:'normal',marginTop:'15px'}}>{item.author}</Text>

                    <View>
                        <View style={{width:'80px',height:'20px',borderRadius:5,alignItems:'center',flexDirection:'row',marginTop:'20px',gap:10}}>
                            <Image source={require('/assets/eye 1.png')} style={{width:'18px',height:'18px'}} />
                            <Text>{item.view}</Text>
                        </View>
                        
                    </View>
                </View>


                <View style={{justifyContent:'flex-end',marginBottom:'10px'}} >
                <Pressable style={{width:'27px',height:'13px',backgroundColor:'#C86AAD',justifyContent:'center',alignItems:'center',borderRadius:4}}>
                    <Text style={{fontWeight:'500'}}>Xóa</Text>

                </Pressable>
                </View>
               
           </View>
        )
        }}>
      </FlatList>
    </ScrollView>
    </View>
  )
}
