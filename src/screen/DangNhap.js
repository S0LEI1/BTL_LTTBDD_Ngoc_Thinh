import React from "react";
import { View, Image, Text, Pressable, StatusBar } from "react-native";

export default function DangNhap({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 10, alignItems: "center", backgroundColor:'#fff' }}>
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
          style={{ width: "41px", height: "41px", marginLeft: "20px" }}
          source={require("../../assets/Funhub.png")}
          resizeMode="stretch"
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
        style={{ width: "100%", height: "150px", justifyContent: "flex-start" }}
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

      <View
        style={{
          width: "100%",
          height: "80px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Pressable
          style={{
            width: "90%",
            height: "31px",
            backgroundColor: "#0F7ABC",
            borderRadius: 5,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: "28px", height: "28px" }}
            source={require("../../assets/ggicon.png")}
          />
          <Text
            style={{
              fontSize: 13,
              fontWeight: "bold",
              color: "#ffff",
              marginLeft: "65px",
            }}
          >
            Đăng nhập bằng Google
          </Text>
        </Pressable>
        <Pressable
          style={{
            width: "90%",
            height: "31px",
            backgroundColor: "#0F7ABC",
            borderRadius: 5,
            flexDirection: "row",
            alignItems: "center",
            marginTop: "15px",
          }}
        >
          <Image
            style={{ width: "28px", height: "28px" }}
            source={require("../../assets/facebookicon.png")}
          />
          <Text
            style={{
              fontSize: 13,
              fontWeight: "bold",
              color: "#ffff",
              marginLeft: "65px",
            }}
          >
            Đăng nhập bằng Facebook
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          width: "100%",
          height: "150px",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "20px",
          padding: 10,
        }}
      >
        <Text style={{ fontSize: 13, fontWeight: "500", color: "#666666" }}>
          Thông qua việc đăng nhập tài khoản đồng nghĩa với việc bạn chấp nhận
          các
          <Text style={{ color: "#0F7ABC" }}>điều khoản sử dụng của Fuhu.</Text>
        </Text>

        <Pressable
          style={{}}
          onPress={() => {
            navigation.navigate("DangNhapTK");
          }}
        >
          <Text style={{ marginTop: "10px" }}>Đăng nhập bằng tài khoản</Text>
        </Pressable>
      </View>
    </View>
  );
}
