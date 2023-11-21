import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowLeft2,
  ArrowRight,
  ArrowRight2,
} from "iconsax-react-native";
import styles from "../style/Image_Chapter_style";
import label from "../style/Text_style";
const screenWidth = Dimensions.get("window").width;
const Image_Chapter = ({ navigation, route }) => {
  const { data } = route.params;
  const [oldOffset, setOldOffset] = useState(0);
  const [hidden, setHidden] = useState(true);
  return (
    <View style={styles.container}>
      <View
        style={{
          paddingHorizontal: 20,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#fff",
          paddingBottom: 5,
        }}
      >
        <ArrowLeft
          onPress={() => navigation.goBack()}
          color="#0D1117"
          style={{ marginRight: 5 }}
        />
        <Text>Chap {data.chapter}</Text>
      </View>

      <FlatList
        onScrollBeginDrag={(event) => {
          const currentOffset = event.nativeEvent.contentOffset.y;
          setOldOffset(currentOffset);
          if (!(currentOffset < 0) && currentOffset !== 0) {
            if (currentOffset < oldOffset) {
              setHidden(true)
            } else {
              setHidden(false)
            }
          }
        }}
        data={data.image_chapter}
        renderItem={({ item }) => (
          <View>
            <Image
              source={item.src}
              resizeMode="stretch"
              style={{
                width: screenWidth,
                height: Image.resolveAssetSource(item.src).height * 0.8,
              }}
            />
          </View>
        )}
      />
      {hidden ? (
        <View style={styles.controlBox}>
          <Pressable style={styles.arrowButton}>
            <ArrowLeft2 color="#fff" />
          </Pressable>
          <Pressable style={styles.chapButton}>
            <Text style={[{ color: "#fff", fontSize: 15 }]}>
              Chap {data.chapter}
            </Text>
          </Pressable>
          <Pressable style={styles.arrowButton}>
            <ArrowRight2 color="#fff" />
          </Pressable>
        </View>
      ) : (
        ""
      )}
    </View>
  );
};

export default Image_Chapter;
