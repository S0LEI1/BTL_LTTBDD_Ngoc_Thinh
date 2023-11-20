import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LichSuDoc from "./src/screen/LichSuDoc";
import DangNhap from "./src/screen/DangNhap";
import DangNhapTK from "./src/screen/DangNhapTK";
import VietBaiDang from "./src/screen/VietBaiDang";
import MyTabs from "./src/component/MyTabs";
import Image_Chapter from "./src/screen/Image_Chapter";
import List_Commic from "./src/screen/List_Commic";
import Commic_Detail from "./src/screen/Commic_Detail";
import Chapter_List from "./src/screen/Chapter_List";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="DangNhapTK"
      >
        <Stack.Screen name="MyTabs" component={MyTabs} />
        <Stack.Screen name="VietBaiDang" component={VietBaiDang}></Stack.Screen>
        <Stack.Screen name="DangNhapTK" component={DangNhapTK}></Stack.Screen>
        <Stack.Screen name="DangNhap" component={DangNhap}></Stack.Screen>
        <Stack.Screen name="LichSuDoc" component={LichSuDoc}></Stack.Screen>
        <Stack.Screen name="List_Commic" component={List_Commic} />
        <Stack.Screen name="Commic_Detail" component={Commic_Detail} />
        <Stack.Screen name="Image_Chapter" component={Image_Chapter} />
        <Stack.Screen name="Chapter_List" component={Chapter_List} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
