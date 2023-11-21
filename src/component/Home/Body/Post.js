import { View, Text, Pressable, ProgressBarAndroidBase,Image,FlatList, ActivityIndicator} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Heart, ProfileCircle } from 'iconsax-react';
import VietBaiDang from '../../../screen/VietBaiDang';

const Post = ({navigation, route}) => {
  const {category, data} = route.params;
  console.log(category);
  console.log(data);
  const [datacomment,setDataComment]=useState([]);
  const [postText, setPostText] = useState('');
  const [isLoading,setIsLoanding]=useState(true);
  const handlePost = async () => {
    try {
      await AsyncStorage.setItem('post', postText);
      alert('Post saved successfully!');
      setPostText('');
    } catch (e) {
      alert('Failed to save post');
    }
  }
  useEffect(()=>{
    getComments();
    return()=>{

    }
  },[])
 getComments= () =>{
  
  const url='https://655c3657ab37729791aa1569.mockapi.io/comment/comments';
  fetch(url).then((res)=>res.json())
  .then((resJson)=>{
    setDataComment(resJson)
  }).catch((error)=>{
    console.log('Error', error);
  }).finally(()=>setIsLoanding(false))
}
renderItem=({item,index})=>{
 
}
  return (
    <View style={{flex:1,width:400,}}>

      <View>
      <Pressable onPress={()=>{
        navigation.navigate('Profile')
      }}>
        <Text>{JSON.stringify(category)}</Text>
      </Pressable>
      </View>
      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',borderBottomWidth:2,borderBottomColor:'lightgray',margin:10,}}>
      <Image source={require('../../../../assets/user-circle.png')} style={{width:45,height:45}}/>

          <Pressable style={{width:360,height:40,flexDirection:'row',alignItems:'center'}}  onPress={()=>{
        navigation.navigate('VietBaiDang')
      }} > 

            <Text style={{color:'lightgray'}}>Bạn đang nghĩ gì?</Text>
          </Pressable>

      </View>
      {isLoading ? <ActivityIndicator/> :(
      <FlatList style={{flex:1,width:390}} data={datacomment} renderItem={({item})=>
      (
        <View style={{borderBottomWidth:2,width:360,height:150,borderBottomColor:'lightgray',margin:10}}>
         <View style={{flex:1,flexDirection:'row',gap:10}}>

          <View style={{flex:1,flexDirection:'row',gap:10}}>
         <Image  source={{uri: item.url}}  style={{width:45,height:45,borderRadius:200/2}}/>
         <View>
          <Text style={{fontSize:15,fontWeight:'bold'}}>{item.name}</Text>
          <Text style={{fontSize:12,fontWeight:'normal'}}>{item.time}</Text>
          
          
          </View>
          </View>
          <View>
            <Image source={require('../../../../assets/more.png')} style={{width:20,height:20}}/>
          </View>
         </View>
         <View style={{flex:1,justifyContent:'center',borderBottomWidth:1}}>
          <Text style={{fontSize:15,fontWeight:'normal',color:'gray'}}>{item.title}</Text>
          </View>
          <View style={{flexDirection:'row',height:30,alignItems:'center',justifyContent:'space-between'}}>
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',gap:5}}>
              <Image source={require('../../../../assets/love.png')} style={{width:20,height:20}}/>
              <Text>Like</Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',gap:5}}>
              <Image source={require('../../../../assets/comment.png')} style={{width:20,height:20}}/>
              <Text>Comment</Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',gap:5}}>
              <Image source={require('../../../../assets/share.png')} style={{width:20,height:20}}/>
              <Text>Share</Text>
              </View>
          </View>
        </View>
      )} >
     

      </FlatList>
      )}
    </View>
  )
}

export default Post