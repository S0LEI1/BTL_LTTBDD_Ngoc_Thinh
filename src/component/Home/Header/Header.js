import { View,
    Text,
    Pressable,
    SafeAreaView,
    StyleSheet,
    TextInput,
    StatusBar, } from 'react-native'
import React,{useState} from 'react'
import { SearchNormal1 } from "iconsax-react-native";
import styles from "../../../../src/style/Home_style";
import label from "../../../../src/style/Text_style";
const Header = ({page, setPage}) => {
  return (
    <View>
      <View style={styles.searchBox}>
        <SearchNormal1 color="black" />
        <TextInput placeholder="Nhập tên, nội dung, kênh .." />
      </View>
      {/* Selection box */}
      <View style={styles.selectionBox}>
        <Pressable
          disabled ={page == "FOR_YOU" ? true :false}
          onPress={() => {
            setPage("FOR_YOU");
          }}
        >
          <Text style={[label.primaryFont, label.color ]}>
            Dành cho bạn
          </Text>
          {page == "FOR_YOU" ? <View style={styles.underline} /> : null}
        </Pressable>
        <Pressable
          disabled ={page == "DISCOVER" ? true :false}
          onPress={() => {
            setPage("DISCOVER");
          }}
        >
          <Text style={[label.primaryFont,label.color]}>
            Khám phá
          </Text>
          {page == "DISCOVER" ? <View style={styles.underline} /> : null}
        </Pressable>
        <Pressable
          disabled ={page == "POST" ? true :false}
          onPress={() => {
            setPage("POST");
          }}
        >
          <Text style={[label.primaryFont, label.color ]}>
            Bài viết
          </Text>
          {page == "POST" ? <View style={styles.underline} /> : null}
        </Pressable>
      </View>
    </View>
  )
}

export default Header