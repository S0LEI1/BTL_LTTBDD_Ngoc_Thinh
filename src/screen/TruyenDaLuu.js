import React from 'react'
import { Pressable, View,Image,Text ,FlatList} from 'react-native'
import  { useEffect, useState } from "react";
import { comic_data } from "../data/comic_data";

export default function TruyenDaLuu({navigation,route}) {
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
  return (
    <View style={{ flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        }}>

        <View style={{width:'100%',height:30,justifyContent:'flex-start',flexDirection:'row'}} > 
            <Pressable style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}} >
                <Image source={require('/assets/ArrowLeft.png')} style={{width:20,height:12}} />
                <Text style={{fontWeight:'700',color:'#CC4900'}}>Nội dung đã lưu</Text>
            </Pressable>
        </View>
        <FlatList  stickyHeaderHiddenOnScroll style={{width:'100%',position:'absolute',marginTop:25,}}  data={comic_data}
        renderItem={({item}) => {
            return(
                <View style={{width:'100%',flexDirection:'row',}}>

                    <View>
                    <Image source={item.image} style={{ width: 100, height:135,margin:10,borderRadius:7}} />
                    </View>
                    <View style={{justifyContent:'space-around',width:280}}>
                       <Text>{item.name}</Text> 
                       <Text>{item.category}</Text>
                       <View style={{flexDirection:'row',gap:10}}>
                        <Image source={require('/assets/eye 1.png')} style={{width:18,height:18}}/>
                        <Text>{item.view}</Text>
                       </View>
                    </View> 
                </View>
            )
            }
        }
        >

        </FlatList>
    </View>
  )
}
