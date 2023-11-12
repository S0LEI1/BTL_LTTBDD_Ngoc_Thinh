import React from "react";
import { Dimensions, StyleSheet } from "react-native";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  carousel: {
    width: screenWidth - 60,
    height: 150,
    marginVertical: 20,
    marginRight: 10,
    backgroundColor: "#484e52",
    alignItems: "center",
    borderRadius: 10,
  },
  carouselBox: {
    width: screenWidth - 40,
    height: 150,
    marginRight: 10,
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
  },
  carouselImg: {
    width: screenWidth / 2,
    height: 150,
  },
  titleBox: {
    width: "100%",
    height: 30,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#484e52",
    opacity: 0.7,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  commicBox: {
    width: 100,
    height: 200,
    marginRight: 10,
    marginTop: 10,
    alignItems: "center",
  },
  commicImg: {
    width: "100%",
    height: "72%",
    borderRadius: 10,
  },
  numberBox:{
    backgroundColor:'red',
    position:'absolute',
    right:0,
    width:20,
    height:20,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center'
  },
  number: {
    color:'#fff'
  },
});
export default styles;
