import { View, Text, Image, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "../style/Profile_style";
import { Profile, ProfileCircle } from "iconsax-react-native";
import {team} from "../data/data"
const Profile_Screen = () => {
  return (
    <View>
      <View style={styles.header}>
        <Image
          source={require("../../assets/Funhub.png")}
          resizeMode="stretch"
          style={styles.logo}
        />
        <Text>Funhub</Text>
      </View>
      {/* account */}
      <View>
        <Text>Quản lý tài khoản</Text>
        <View style={styles.accBox}>
          <ProfileCircle style={{ width: 45, height: 45 }} />
          <View>
            <Text>Xin chào</Text>
            <Text>User</Text>
            <Text>vanngoc@gmail.com</Text>
          </View>
        </View>
      </View>
      <View style={styles.line} />
      <View>
        <Text>Kênh theo dõi</Text>
        <View>
          <FlatList
            data={team}
            horizontal
            renderItem={({ item }) => (
              <View style={styles.teamBox}>
                <Image source={item.image} style={styles.teamImg} />
                <Text>{item.id}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default Profile_Screen;
