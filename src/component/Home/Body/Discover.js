import {
  View,
  Text,
  FlatList,
  Pressable,
  Image,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { comic_data } from "../../../data/comic_data";
import label from "../../../style/Text_style";
import styles from "../../../style/Discover_style";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const screenWidth = Dimensions.get("window").width;

const Discover = ({ navigation, route }) => {
  const [carousel, setTopCarousel] = useState(comic_data);
  const [appoint, setAppoint] = useState(comic_data);
  const [topView, setTopView] = useState(comic_data);
  const [manhua, setManhua] = useState(comic_data);
  const [manhwa, setManhwa] = useState(comic_data);
  const [newComnic, setNewCommic] = useState(comic_data);
  const MANHUA = "Manhua";
  const MANHWA = "Manhwa";
  const top_carousel = carousel.filter(
    function (item) {
      if (this.count < 5 && item.view > 12000) {
        this.count++;
        return true;
      }
      return false;
    },
    { count: 0 }
  );

  const appoint_commic = appoint.filter(
    function (item) {
      if (this.count < 5 && item.isSave == true) {
        this.count++;
        return true;
      }
      return false;
    },
    { count: 0 }
  );
  const manhua_comic = manhua
    .filter(function (item) {
      return item.category.includes(MANHUA);
    })
    .sort((a, b) => {
      return b.view - a.view;
    });
  const top_view = topView
    .sort((a, b) => {
      return b.view - a.view;
    })
    .slice(0, 5);
  const manhwa_comic = manhwa
    .filter(function (item) {
      return item.category.includes(MANHWA);
    })
    .sort((a, b) => {
      return b.view - a.view;
    });
  useEffect(() => {
    setTopCarousel(top_carousel);
    setAppoint(appoint_commic);
    setTopView(top_view);
    setManhua(manhua_comic);
    setManhwa(manhwa_comic);
  }, []);
  const navigationCommicDetail = (item) => {
    navigation.navigate("Commic_Detail", { data: item });
  };
  return (
    <View>
      {/* Top carousel */}
      <View>
        <FlatList
          data={carousel}
          horizontal
          showsVerticalScrollIndicator={false}
          keyExtractor={(i) => i.id}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => navigationCommicDetail(item)}
              style={styles.carousel}
            >
              <View style={styles.carouselBox}>
                <Image
                  style={styles.carouselImg}
                  source={item.image}
                  resizeMode="stretch"
                />
              </View>
              <View style={styles.titleBox}>
                <Text style={[label.primaryFont, { color: "#fff" }]}>
                  {item.name}
                </Text>
              </View>
            </Pressable>
          )}
        />
      </View>
      {/* Truyện đề cử */}
      <View>
        <Text style={[label.titleFont, { fontWeight: "700" }]}>Fuho đề cử</Text>
        <FlatList
          horizontal
          data={appoint}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => navigationCommicDetail(item)}
              style={styles.commicBox}
            >
              <Image
                style={styles.commicImg}
                source={item.image}
                resizeMode="stretch"
              />
              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={[label.secondFont, { textAlign: "center" }]}
              >
                {item.name}
              </Text>
            </Pressable>
          )}
        />
      </View>
      {/* Top view */}
      <View>
        <Text style={label.titleFont}>Top lượt xem</Text>
        <FlatList
          horizontal
          data={topView}
          renderItem={({ item, index }) => (
            <Pressable
              onPress={() => navigationCommicDetail(item)}
              style={styles.commicBox}
            >
              <Image
                source={item.image}
                style={[styles.commicImg, { position: "relative" }]}
                resizeMode="stretch"
              />
              <View style={[styles.numberBox]}>
                <Text>{index + 1}</Text>
              </View>
              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={label.secondFont}
              >
                {item.name}
              </Text>
            </Pressable>
          )}
        />
      </View>
      {/* Manhua */}
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={label.titleFont}>Manhua</Text>
          <Pressable
            onPress={() => {
              navigation.navigate("List_Commic", {
                category: MANHUA,
                data: manhua_comic,
              });
            }}
          >
            <Text>Xem thêm</Text>
          </Pressable>
        </View>
        <View>
          <FlatList
            horizontal
            data={manhua.slice(0, 1)}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => navigationCommicDetail(item)}
                key={item.id}
                style={[
                  styles.carousel,
                  { marginRight: 0, width: screenWidth - 40 },
                ]}
              >
                <Image
                  source={item.image}
                  resizeMode="stretch"
                  style={styles.carouselImg}
                />
                <Text
                  numberOfLines={2}
                  ellipsizeMode="tail"
                  style={label.secondFont}
                >
                  {item.name}
                </Text>
              </Pressable>
            )}
          />
        </View>
        <FlatList
          horizontal
          data={manhua.slice(1, 5)}
          renderItem={({ item, index }) => (
            <Pressable
              onPress={() => navigationCommicDetail(item)}
              style={styles.commicBox}
              key={item.id}
            >
              <Image source={item.image} style={styles.commicImg} />
              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={label.secondFont}
              >
                {item.name}
              </Text>
            </Pressable>
          )}
        />
      </View>
      {/* Manhwa */}
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={label.titleFont}>Manhwa</Text>
          <Pressable
            onPress={() =>
              navigation.navigate("List_Commic", {
                category: MANHWA,
                data: manhwa_comic,
              })
            }
          >
            <Text>Xem thêm</Text>
          </Pressable>
        </View>
        <View>
          <FlatList
            horizontal
            data={manhwa.slice(0, 1)}
            renderItem={({ item }) => (
              <Pressable
                key={item.id}
                onPress={() => navigationCommicDetail(item)}
                style={[
                  styles.carousel,
                  { marginRight: 0, width: screenWidth - 40 },
                ]}
              >
                <Image
                  source={item.image}
                  resizeMode="stretch"
                  style={styles.carouselImg}
                />
                <Text
                  numberOfLines={2}
                  ellipsizeMode="tail"
                  style={label.secondFont}
                >
                  {item.name}
                </Text>
              </Pressable>
            )}
          />
        </View>
        <FlatList
          horizontal
          data={manhwa.slice(1, 5)}
          renderItem={({ item, index }) => (
            <Pressable
              onPress={() => navigationCommicDetail(item)}
              style={styles.commicBox}
              key={item.id}
            >
              <Image source={item.image} style={styles.commicImg} />
              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={label.secondFont}
              >
                {item.name}
              </Text>
            </Pressable>
          )}
        />
      </View>
      {/* Mới cập nhật */}
      <View>
        <Text style={label.titleFont}>Mới cập nhật</Text>
        <FlatList
          horizontal
          data={newComnic.slice(0, 7)}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => navigationCommicDetail(item)}
              style={[styles.commicBox, { height: 220 }]}
            >
              <Image
                source={item.image}
                resizeMode="stretch"
                style={styles.commicImg}
              />
              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={label.secondFont}
              >
                {item.name}
              </Text>
              <Text>Chap {item.chapter}</Text>
            </Pressable>
          )}
        />
      </View>
      <View style={{ height: 30 }} />
    </View>
  );
};

export default Discover;
