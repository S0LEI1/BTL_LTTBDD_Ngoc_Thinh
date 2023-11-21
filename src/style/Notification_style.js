import React from "react";
import { StyleSheet, Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 20,
  },
  notificationBox:{
    flexDirection:'row',
    backgroundColor:'#DEA4A4',
    marginBottom:10,
    paddingHorizontal:10,
    paddingVertical:5,
    justifyContent:'space-between'
  },
  image:{
    width:50,
    height:50,
    borderRadius:25
  }
});
export default styles;
