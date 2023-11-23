import { View, Text, Image, FlatList, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "../style/Profile_style";
import {
  Logout,
  Profile,
  Profile2User,
  ProfileCircle,
  Setting2,
} from "iconsax-react-native";
import { comic_data } from "../../src/data/comic_data";
import { team } from "../data/data";
import label from "../style/Text_style";
const Profile_Screen = ({ route, navigation }) => {
  const { user } = route.params;
  const [saveCommic, setSaveCommic] = useState([]);
  const [followTeam, setFollowTeam] = useState([]);
  const save = comic_data.filter((item) => item.isSave == true);

  function getTeamTranslate(id) {
    for (const item of team) {
      if (item.id == id) {
        return item;
      }
    }
  }
  const team_translate = user.follow_team.map((item) => getTeamTranslate(item));
  // console.log(user);
  useEffect(() => {
    setSaveCommic(save);
    setFollowTeam(team_translate);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/Funhub.png")}
          resizeMode="stretch"
          style={styles.logo}
        />
        <Text style={[label.titleFont, label.color, { marginLeft: 10 }]}>
          Funhub
        </Text>
      </View>
      {/* account */}
      <View>
        <Text style={[label.primaryFont, { fontWeight: 700, }]}>
          QUẢN LÝ TÀI KHOẢN
        </Text>
        <View style={styles.accBox}>
          <ProfileCircle size={45} style={styles.iconUser} />
          <View>
            <Text>Xin chào</Text>
            <Text style={{ fontWeight: "700" }}>{user.name}</Text>
            <Text>vanngoc@gmail.com</Text>
          </View>
        </View>
      </View>
      <View style={styles.line} />
      <View>
        <Text style={[label.primaryFont, { fontWeight: "600" }]}>
          Kênh theo dõi
        </Text>
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={followTeam}
            horizontal
            renderItem={({ item }) => (
              <View style={styles.teamBox}>
                <Image source={item.team_img} style={styles.teamImg} />
                <Text numberOfLines={1} ellipsizeMode="tail">
                  {item.team_translate}
                </Text>
              </View>
            )}
          />
        </View>
      </View>
      <View style={styles.line} />
      {/* Truyện đã lưu */}
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 5,
          }}
        >
          <Text style={[label.primaryFont, { fontWeight: "600" }]}>
            Nội dung đã lưu
          </Text>
          <Pressable onPress={()=>navigation.navigate('List_Commic',{
            category : "Nội dung đã lưu",
            data : saveCommic
          })}>
            <Text>Xem thêm</Text>
          </Pressable>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={saveCommic.slice(1, 5)}
          renderItem={({ item }) => (
            <Pressable style={styles.commicBox}>
              <Image
                style={styles.commicImg}
                source={item.image}
                resizeMode="stretch"
              />
              <Text numberOfLines={1} ellipsizeMode="tail">
                {item.name}
              </Text>
            </Pressable>
          )}
        />
      </View>
      <View style={styles.line} />
      {/* Lịch sử đọc */}
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 5,
          }}
        >
          <Text style={[label.primaryFont, { fontWeight: "600" }]}>
            Lịch sử của bạn
          </Text>
          <Pressable onPress={()=>navigation.navigate('List_Commic',{
            category : "Lịch sử",
            data : saveCommic
          })}>
            <Text>Xem thêm</Text>
          </Pressable>
        </View>
        <FlatList
          horizontal
          data={saveCommic.slice(1, 5)}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Pressable style={styles.commicBox}>
              <Image
                style={styles.commicImg}
                source={item.image}
                resizeMode="stretch"
              />
              <Text numberOfLines={1} ellipsizeMode="tail">
                {item.name}
              </Text>
            </Pressable>
          )}
        />
      </View>
      <View style={styles.line} />
      <View style={styles.align}>
        <Setting2 color="#0D1117" />
        <Text>Cài đặt chung</Text>
      </View>
      <View style={styles.line} />
      <View style={[styles.align, { justifyContent: "space-between" }]}>
        <View style={{ flexDirection: "row" }}>
          <Profile2User color="#0D1117" />
          <Text>Liên hệ:</Text>
        </View>
        <Text>vanngoc@gmail.com</Text>
      </View>
      <View style={styles.line} />
      <Pressable onPress={() => navigation.popToTop()} style={styles.align}>
        <Logout color="#0D1117" />
        <Text>Đăng xuất</Text>
      </Pressable>
    </View>
  );
};

export default Profile_Screen;
