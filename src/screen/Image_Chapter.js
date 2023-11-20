import { View, Text, FlatList, Image, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowLeft } from "iconsax-react-native";
const screenWidth = Dimensions.get("window").width;
const Image_Chapter = ({ navigation, route }) => {

  const { data } = route.params;
  return (
    <View>
      <View style={{paddingHorizontal:20, flexDirection:'row', alignItems:'center', backgroundColor:'#fff'}}>
        <ArrowLeft onPress={()=>navigation.goBack()} color="#0D1117" style={{marginRight:5}} />
        <Text>Chap {data.chapter}</Text>
      </View>
      <FlatList
        data={data.image_chapter}
        renderItem={({ item }) => (
          <View>
            <Image
              source={item.src}
              resizeMode="stretch"
              style={{
                width: screenWidth,
                height: Image.resolveAssetSource(item.src).height *0.8,
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

export default Image_Chapter;
