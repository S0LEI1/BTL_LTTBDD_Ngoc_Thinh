import {
  View,
  Text,
  Pressable,
  SafeAreaView,
  StyleSheet,
  TextInput,
  StatusBar,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "../style/Home_style";
import label from "../style/Text_style";
import Header from "../component/Home/Header/Header";
import For_You from "../component/Home/Body/ForYou";
import Discover from "../component/Home/Body/Discover";
import Post from "../component/Home/Body/Post";
import { SearchNormal1 } from "iconsax-react-native";

const FOR_YOU = "FOR_YOU";
const DISCOVER = "DISCOVER";
const POST = "POST";
const Home = ({ navigation, route }) => {
  const [page, setPage] = useState(DISCOVER);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" />
      <Header page={page} setPage={setPage} />
      <ScrollView>
      {
        page == DISCOVER ?  <Discover /> : ((page== POST) ? <Post /> : <For_You />)
      }
      </ScrollView>
    </View>
  );
};
export default Home;
