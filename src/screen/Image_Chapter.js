import { View, Text, FlatList, Image, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { comic_data } from "../data/comic_data";
const screenWidth = Dimensions.get("window").width;
const Image_Chapter = ({ navigation, route }) => {
  var [comic, setComic] = useState({});
  var getComic = () => {
    comic_data.map((item) => {
      if (item.id == route.params) {
        setComic(item);
      }
    });
  };
  useEffect(() => {
    getComic();
  });
  return (
    <View>
      <FlatList
        data={comic.image_chapter}
        renderItem={({ item }) => (
          <View>
            <Image
              source={item.src}
              style={{
                width: screenWidth,
                height: Image.resolveAssetSource(item.src).height,
              }}
            />
            <View style={{height:10}} />
          </View>
        )}
      />
    </View>
  );
};

export default Image_Chapter;
