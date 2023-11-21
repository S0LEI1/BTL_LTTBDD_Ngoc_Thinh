import { CloseCircle, EmojiHappy } from 'iconsax-react'
import React, { useState } from 'react'
import { View ,Text, Image, Pressable} from 'react-native'
import { TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native'

const VietBaiDang = ({navigation, route}) => {
  const [postText, setPostText] = useState('');
 
  const handlePost = async () => {
    try {
      await AsyncStorage.setItem('post', postText);
      alert('Post saved successfully!');
      setPostText('');
    } catch (e) {
      alert('Failed to save post');
    }
  }
  return (
    <View style={{flex:1,padding:10,alignItems:'center'}}>

      <View style={{width:360}}> 
        <Pressable style={{width:30,height:10,justifyContent:'flex-start'}}onPress={() => navigation.goBack()} >
          <Image style={{width:24,height:10}} source={require('../../assets/ArrowLeft.png')} />
        </Pressable></View>
       
        <View style={{width:360,marginTop:10}}>
            <Text>Xin chào VanNgoc</Text>
            <Text style={{fontWeight:'700',marginTop:10}} >Bạn đang nghĩ gì</Text>
        </View>
    <View style={{width:360,height:177,marginTop:10}}>
        <TextInput value={postText} onChangeText={setPostText} placeholder='Hãy viết gì đó' multiline={true} style={{height:177,borderWidth:1,padding:10,borderRadius:4,borderColor:'#CC4900'}}>

        </TextInput>
    </View>
   

    <TouchableOpacity onPress={handlePost} style={{justifyContent:'center',alignItems:'center',width:360,height:40,backgroundColor:'#CC4900',borderRadius:15,marginTop:10}} ><Text style={{fontSize:15,fontWeight:'normal',color:'#FFF'}}>ĐĂNG BÀI</Text></TouchableOpacity>
    </View>
  )
}
export default VietBaiDang