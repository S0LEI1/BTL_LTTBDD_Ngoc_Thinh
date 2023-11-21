import { View, Text, FlatList, Image, Pressable } from "react-native";
import React from "react";
import styles from "../style/Notification_style";
import { comic_data } from "../data/comic_data";
import label from "../style/Text_style";
const Notification = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text style={[label.secondFont, { fontSize: 20, marginBottom: 10 }]}>
        Thông báo
      </Text>
      <FlatList
        data={comic_data}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              navigation.navigate("Commic_Detail", {
                data: item,
              });
            }}
            style={styles.notificationBox}
          >
            <View style={{ flexDirection: "row" }}>
              <Image
                style={styles.image}
                source={item.image}
                resizeMode="stretch"
              />
              <View style={{ marginLeft: 15 }}>
                <Text>{item.name}</Text>
                <Text>Tập {item.chapter}</Text>
              </View>
            </View>
            <Text>1 giờ trước</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default Notification;
