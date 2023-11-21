import React from "react";
import { StyleSheet, Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  controlBox:{
    width:screenWidth,
    height:30,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    marginVertical:5
  },
  arrowButton:{
    width:36,
    height:20,
    backgroundColor:'#A01F1F',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5
  },
  chapButton:{
    width:146,
    height:20,
    backgroundColor:'#A01F1F',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5
  }
})
export default styles;