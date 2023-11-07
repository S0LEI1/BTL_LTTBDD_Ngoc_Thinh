import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { comic_data } from "../data/comic_data";
const Image_Chapter = ({ navigation, route }) => {
  console.log(route.params);
  console.log("comic_data", comic_data);
  var [comic, setComic] = useState({});
  var getComic = () => {
    comic_data.map((item) => {
      if (item.id == route.params) {
        console.log("item", item);
        setComic(item);
      }
    });
  };
  useEffect(()=>{
    getComic();
  })
  console.log('comic',comic);
  return (
    <View>
      <FlatList
            data={comic.image_chapter}
            renderItem={({item}) => (
              <Image source={item.src} style={{width:'100%', height:300}} />
            )}
          />
    </View>
  );
};

export default Image_Chapter;
