import { View, Text, FlatList, Image, Pressable } from "react-native";
import React from "react";
import { ArrowLeft, Eye } from "iconsax-react-native";
import styles from "../style/List_Commic_style";
import label from "../style/Text_style";

const List_Commic = ({ route, navigation }) => {
  const { category, data } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ArrowLeft color="black" onPress={() => navigation.goBack()} />
        <Text style={[label.primaryFont, label.color, { marginLeft: 10 }]}>
          {category}
        </Text>
      </View>
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Pressable
              onPress={()=>navigation.navigate("Image_Chapter",{
                data : item
              })}
            style={styles.comicBox}>
              <Image
                style={styles.comicImg}
                source={item.image}
                resizeMode="stretch"
              />
              <View style={{ justifyContent: "space-between", marginLeft: 10 }}>
                <View>
                  <Text
                    numberOfLines={2}
                    ellipsizeMode="tail"
                    style={label.secondFont}
                  >
                    {item.name}
                  </Text>
                  <Text>Chap {item.chapter}</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Eye color="black" style={{ marginRight: 5 }} />
                  <Text>{item.view}</Text>
                </View>
              </View>
            </Pressable>
          )}
        />
      </View>
    </View>
  );
};

export default List_Commic;
