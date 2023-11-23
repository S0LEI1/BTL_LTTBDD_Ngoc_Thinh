import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  Text,
  Pressable,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { user_data } from "../../src/data/user_data";
import { Status } from "iconsax-react";
export default function DangNhapTK({ navigation, route }) {
  const [isSecure, setIsSecure] = useState(true);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  const [visible, setVisible] = useState(true)
  useEffect(() => {
    function findLinksByName(id) {
        for(const item of user_data){
            if(item.id==1)
                return item
        }
    }
    setUser(findLinksByName(1));
  }, []);
  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        alignItems: "center",
        backgroundColor: "#fff",
      }}
      
    >
        <StatusBar backgroundColor='#fff' />
      <View
        style={{
          width: "100%",
          height: "70px",
          justifyContent: "flex-start",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          resizeMode="stretch"
          style={{ width: 40, height: 40, marginRight: 10 }}
          source={require("../../assets/Funhub.png")}
        />
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            // fontFamily: "Inter",
            color: "#CC4900",
            marginLeft: "20px",
          }}
        >
          Funhub
        </Text>
      </View>
      <View
        style={{ width: "100%", height: "100px", justifyContent: "flex-start" }}
      >
        <Text style={{ fontSize: 20, fontWeight: "500", marginLeft: "20px" }}>
          Đăng nhập
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "200",
            color: "#707070",
            marginLeft: "20px",
          }}
        >
          Trải nghiệm hàng loạt nội dung đặc sắc và luôn luôn miễn phí!
        </Text>
      </View>
      <View style={{ width: 344, height: 120 ,margin:10}}>
        <Text style={{ fontSize: 15, fontWeight: "700" }}>Tài khoản</Text>
        <View style={{ marginTop: 10, justifyContent: "center" }}>
          <Image
            source={require("../../assets/user.png")}
            style={{ width: 25, height: 25, position: "absolute" }}
          />

          <TextInput
            placeholder="Tài khoản"
            onChangeText={(text) => {
              setUserName(text);
            }}
            style={{
              borderBottomColor: "black",
              paddingLeft: 30,
              height: 30,
              borderBottomWidth: 1,
            }}
          ></TextInput>
        </View>
        <Text style={{ fontSize: 15, fontWeight: "700" }}>Mật khẩu</Text>
        <View style={{ marginTop: 10, justifyContent: "center" }}>
          

         <View style={{alignItems:'center',width:19}}>
            <Pressable style={{position:'absolute',width:25,height:25}}
              onPress={() => 
                setVisible( !visible)
              }
            >{visible ?
               <Image source={require("../../assets/eye1.png")} style={{ width: 25, height: 25,position:'absolute'}}/> : <Image source={require("../../assets/hidden.png")}style={{ width: 25, height: 25, position:'absolute'}}
              /> }
            </Pressable>
            </View>
           
          

          <TextInput
            secureTextEntry={isSecure}
            placeholder="Mật khẩu"
            onChangeText={(text) => {
              setPassword(text);
            }}
            style={{
              borderBottomWidth: 1,
              paddingLeft: 30,
              borderWidth: 0,
              height: 30,
            }}
          ></TextInput>
        </View>
      </View>
      <View
        style={{ justifyContent: "center", alignItems: "center", width: 344,margin:10 }}
      >
        <Text style={{ fontSize: 13, fontWeight: "500", color: "#666666" }}>
          Thông qua việc đăng nhập tài khoản đồng nghĩa với việc bạn chấp nhận
          các
          <Text style={{ color: "#0F7ABC" }}>điều khoản sử dụng của Fuhu.</Text>
        </Text>
      </View>

      <View style={{ marginTop: 10 }}>
        <Pressable
          style={{
            width: 344,
            height: 40,
            backgroundColor: "#CC4900",
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => navigation.navigate('MyTabs',{
            user : user
          })}
        >
          <Text style={{ color: "#FFF", fontSize: 20, fontWeight: "700" }}>
            Đăng nhập
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
