import { View, Text, Image, Pressable, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { comic_data } from "../../../data/comic_data";
import { user_data } from "../../../data/user_data";
import styles from "../../../style/For_You_style";
import label from "../../../style/Text_style";
const ForYou = ({ navigation, route }) => {
  const { user } = route.params;
  const [userData, setUserData] = useState({});
  useEffect(() => {
    setUserData(user);
  }, []);
  function getCommic(id) {
    for (const item of comic_data) {
      if (item.id == id) {
        return item;
      }
    }
  }
  const commic = user.follow_commic.map((item) => getCommic(item));
  return (
    <ScrollView>
      <View style={styles.container}>
        {commic.map((item) => (
          <Pressable
            onPress={() =>
              navigation.navigate("Commic_Detail", {
                data: item,
              })
            }
            style={styles.commicBox}
            key={item.id}
          >
            {/* Header */}
            <View style={styles.header}>
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={item.team_img}
                  style={styles.teamImg}
                  resizeMode="stretch"
                />
                <Text style={label.secondFont}>{item.team_translate}</Text>
              </View>
            </View>
            <View>
              <Text
                style={[
                  label.secondFont,
                  { textAlign: "left", marginVertical: 5 },
                ]}
              >
                {item.name}
              </Text>
              <Text
                style={{ marginBottom: 5 }}
                numberOfLines={5}
                ellipsizeMode="tail"
              >
                {item.description}
              </Text>
            </View>
            <View>
              <Image
                style={styles.commicImg}
                source={item.image}
                resizeMode="stretch"
              />
              <View
                style={[styles.absTxt, { left: 0, backgroundColor: "#B9B9B9" }]}
              >
                <Text style={[{ color: "#fff" }]}>Chap {item.chapter}</Text>
              </View>
              <View
                style={[
                  styles.absTxt,
                  { right: 0, backgroundColor: "#AF2B2B" },
                ]}
              >
                <Text style={[{ color: "#fff", right: 0 }]}>{item.status}</Text>
              </View>
            </View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
};

export default ForYou;
