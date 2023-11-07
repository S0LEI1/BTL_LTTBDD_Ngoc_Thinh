import { CloseCircle, EmojiHappy } from 'iconsax-react'
import React from 'react'
import { View ,Text, Image} from 'react-native'
import { TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native'

export default function VietBaiDang({navigation}) {
  return (
    <View style={{flex:1,padding:10,alignItems:'center'}}>
         <View style={{width:'100%'}}>
         <CloseCircle style={{color:'#CC4900'}}/>
         </View>
        <View style={{width:'100%',marginTop:10}}>
            <Text>Xin chào User</Text>
            <Text style={{fontWeight:'700',marginTop:10}} >Bạn đang nghĩ gì</Text>
        </View>
    <View style={{width:'100%',height:177,marginTop:10}}>
        <TextInput placeholder='Hãy viết gì đó' multiline={true} style={{height:177,borderWidth:1,padding:10,borderRadius:4,borderColor:'#CC4900'}}>

        </TextInput>
    </View>
    <View style={{width:'100%'}}>
    <Image source={require('/assets/image-add.png')} style={{width:40,height:40}} />
    </View>

    <TouchableOpacity style={{justifyContent:'center',alignItems:'center',width:'100%',height:40,backgroundColor:'#CC4900',borderRadius:15,marginTop:10}} ><Text style={{fontSize:15,fontWeight:'normal',color:'#FFF'}}>ĐĂNG BÀI</Text></TouchableOpacity>
    </View>
  )
}
