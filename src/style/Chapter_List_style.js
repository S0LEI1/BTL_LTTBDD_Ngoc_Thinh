import React from "react";
import { StyleSheet, Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 20,
    paddingHorizontal:20
  },
  chapter:{
    width:screenWidth-40,
    height:50,
    borderBottomColor:'#0D1117',
    borderBottomWidth:1,
    justifyContent:'center'
  },
  selection:{
    flexDirection:'row',
    justifyContent:'space-between'
  }
});
export default styles;
