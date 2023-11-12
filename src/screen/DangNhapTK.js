import React, { useState } from 'react'
import { View ,Image,Text, Pressable, TextInput,} from 'react-native'
import { TouchableOpacity } from 'react-native-web';

export default function DangNhapTK() {
    const [isSecure,setIsSecure]=useState(true);
  return (
    <View style={{flex:1,padding:10,alignItems:'center'}}>

        <View style={{width:'100%',height:'70px',justifyContent:'flex-start',flexDirection:'row',alignItems:'center'}}>

            <Image style={{width:'41px',height:'41px',marginLeft:'20px'}} source={require('../../assets/Funhub.png')} />
            <Text style={{fontSize:22,fontWeight:'bold',fontFamily:'Inter',color:'#CC4900',marginLeft:'20px'}}>Funhub</Text>
        </View>
    <View  style={{width:'100%',height:'100px',justifyContent:'flex-start',}}>
        <Text style={{fontSize:20,fontWeight:'500',marginLeft:'20px'}}>
            Đăng nhập
        </Text>
        <Text style={{fontSize:15,fontWeight:'200',color:'#707070',marginLeft:'20px'}}>Trải nghiệm hàng loạt nội dung đặc sắc và luôn luôn miễn phí!</Text>
    </View >
        <View style={{width:344,height:120,}}>
        <Text style={{fontSize:15,fontWeight:"700"}}>Tai khoan</Text>
            <View style={{marginTop:10,justifyContent:'center'}} >
                <Image source={require('../../assets/user.png')} style={{width:20,height:20,position:'absolute'}}/>

                <TextInput  placeholder='Tai khoan' style={{borderBottomColor:'black',paddingLeft:30,height:30,borderBottomWidth:1}}></TextInput>
            </View>
            <Text style={{fontSize:15,fontWeight:"700"}}>Mat khau</Text>
            <View style={{marginTop:10,justifyContent:'center'}} >
                <View>
                <TouchableOpacity   onPress={()=>{

                            setIsSecure((prev) => !prev )
                        }}>
                <Image source={require('../../assets/eye1.png')} style={{width:20,height:20,position:'absolute',}}/>
                </TouchableOpacity>
                </View>
               
                <TextInput  secureTextEntry={isSecure}  placeholder='Mat khau' style={{borderBottomWidth:1,paddingLeft:30,borderWidth:0, height:30}}></TextInput>
            </View>
        </View>
        <View style={{justifyContent:'center',alignItems:'center',width:344}}>

        <Text style={{fontSize:13,fontWeight:'500',color:'#666666'}}>Thông qua việc đăng nhập tài khoản đồng nghĩa với việc bạn chấp nhận các  <span style={{color:'#0F7ABC'}}>điều khoản sử dụng của Fuhu.</span> </Text>
        </View>

        <View style={{marginTop:10}}>

            <Pressable style={{width:344,height:40,backgroundColor:'#CC4900',borderRadius:5,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'#FFF',fontSize:20,fontWeight:'700'}}>Đăng nhập</Text>
            </Pressable>
        </View>
    </View>

  )
}
