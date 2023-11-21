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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal:10
  },
  teamImg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  btnFollow: {
    width: 110,
    height: 30,
    backgroundColor: "#530478",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  status: {
    flexDirection: "row",
    marginVertical: 10,
    alignItems: "center",
  },
  button:{
    backgroundColor:'#AF2B2B',
    width:200,
    height:35,
    marginVertical:5,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10
  },
  commicImg:{
    width:screenWidth-40,
    marginVertical:10,
    height:300
  }
});
export default styles;
