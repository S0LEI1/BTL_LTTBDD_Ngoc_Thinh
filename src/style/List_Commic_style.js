import React from "react";
import { StyleSheet, Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal:20,
        paddingBottom:20
      },
    header:{
        flexDirection:'row'
    },
    comicBox:{
        width:screenWidth-40,
        height:150,
        marginBottom:20,
        flexDirection:'row',
        marginTop:20
    },
    comicImg:{
        width:'40%',
        height:'100',
        borderRadius:10
    }
})
export default styles;