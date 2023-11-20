import { View, Text, ScrollView, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { ArrowLeft } from "iconsax-react-native";
import styles from "../style/Chapter_List_style";
import { FlatList } from "react-native";
import label from "../style/Text_style";
const NEW = "new";
const OLD = "old";
const Chapter_List = ({ navigation, route }) => {
  const { data } = route.params;
  var newChap = [];
  var oldChap = [];
  const [chap, setChap] = useState(NEW);
  const [commicData, setCommicData] = useState({});
  useEffect(() => {
    setCommicData(data);
  }, []);

  for (let i = 0; i < data.chapter; i++) {
    oldChap.push(i);
  }
  for (let i = data.chapter; i >= 1; i--) {
    newChap.push(i - 1);
  }
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <ArrowLeft
          onPress={() => navigation.goBack()}
          color="#0D1117"
          style={{ marginRight: 5 }}
        />
        <Text style={label.secondFont}>{data.name}</Text>
      </View>
      <View style={styles.selection}>
        <View style={{ width: 1 }} ></View>
        <View style={{flexDirection:'row'}}>
          <Pressable
            style={{marginRight:10}}
            disabled={chap == NEW ? true : false}
            onPress={() => {
              setChap(NEW);
            }}
          >
            <Text style={chap == NEW ? label.color : ""}>Mới nhất</Text>
          </Pressable>
          <Pressable
            disabled={chap == OLD ? true : false}
            onPress={() => {
              setChap(OLD);
            }}
          >
            <Text style={chap == OLD ? label.color : ""}>Cũ nhất</Text>
          </Pressable>
        </View>
      </View>
      <FlatList
        data={chap == NEW ? newChap : oldChap}
        renderItem={({ item }) => (
          <View style={styles.chapter}>
            <Text>Chap {item + 1}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Chapter_List;
