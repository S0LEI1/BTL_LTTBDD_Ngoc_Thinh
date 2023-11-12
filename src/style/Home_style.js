import React from "react";
import { Dimensions, StyleSheet } from "react-native";
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal:20
      },
      searchBox:{
        width:screenWidth-40,
        height:35,
        backgroundColor:'#B9B9B9',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:10,
        borderRadius:10
      },
      selectionBox:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:20,
        height:30
      },
      underline:{
        width:'100%',
        height:3,
        backgroundColor:'#CC4900',
        position:'absolute',
        bottom:0,
      }
})
export default styles;