import React from "react";
import { Dimensions, StyleSheet } from "react-native";
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const label = StyleSheet.create({
    primaryFont:{
        fontSize:16,
        fontWeight:'400'
    },
    secondFont:{
        fontSize:16,
        textAlign:'center',
        fontWeight:'700',
    },
    titleFont:{
        fontSize:20,
        fontWeight:'700',
    }
})
export default label;