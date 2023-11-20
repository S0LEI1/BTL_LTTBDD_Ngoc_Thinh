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
  commicBox:{
    width:screenWidth-40,
    height:screenHeight*0.7,
    marginBottom:10,
    borderBottomColor:'#0D1117',
    borderBottomWidth:1
},
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop:10
    // marginHorizontal: 20,
  },
  teamImg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight:10
  },
  commicImg:{
    width:'100%',
    height:'80%',
    position:'relative'
  },
  absTxt:{
    position:'absolute',
    marginHorizontal:10,
    marginTop:10,
    width:100,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5
  }
});
export default styles;
