import React from "react";
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal:20
      },
    header:{
        flexDirection:'row',
        marginBottom:10
    },
    iconUser:{
        color:'#0D1117'
    },
    logo:{
        width:25,
        height:25
    },
    accBox:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:10
    },
    teamBox:{
        width:80,
        marginRight:20,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:10
    },
    teamImg:{
        width:60,
        height:60,
        borderRadius:30
    },
    commicBox:{
        width:100,
        height:100,
        marginLeft:5
    },
    commicImg:{
        width:"100%",
        height:80
    },
    align:{
        flexDirection:'row',
        alignItems:'center'
    },
    line:{
        width:'100%',
        height:3,
        backgroundColor:'#D9D9D9',
        marginVertical:5
    }
})
export default styles;