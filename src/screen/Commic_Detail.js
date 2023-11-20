import { View, Text, Image, Pressable, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "../style/Commic_Detail_style";
import { ArrowLeft, Chart, Eye, HambergerMenu } from "iconsax-react-native";
import label from "../style/Text_style";

const Commic_Detail = ({ navigation, route }) => {
  const { data } = route.params;
    const [commicData, setCommicData] = useState({});
    useEffect(()=>{
        setCommicData(data);
    },[])
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flexDirection: "row" }}>
          <ArrowLeft color="black" onPress={() => navigation.goBack()} />
          <Image
            source={data.team_img}
            style={styles.teamImg}
            resizeMode="stretch"
          />
          <Text style={label.secondFont}>{data.team_translate}</Text>
        </View>
        <Pressable style={styles.btnFollow}>
          <Text style={[label.primaryFont, { color: "#fff" }]}>Theo dõi</Text>
        </Pressable>
      </View>
      {/* Detail */}
      <ScrollView style={{backgroundColor:'#D9D9D9', paddingHorizontal:20, marginTop:10}}>
        <Text style={[label.titleFont,{marginVertical:10}]}>{data.name}</Text>
        <Text style={label.desciptionFont}>{data.description}</Text>
        <View style={styles.status}>
          <Chart color="black" />
            <Text style={[label.desciptionFont,{marginLeft:5}]}>Trạng thái: {data.status}</Text>
        </View>
        <View style={styles.status}>
          <Eye color="black" />
            <Text style={[label.desciptionFont,{marginLeft:5}]}>Lượt truy cập: {data.view}</Text>
        </View>
        {/* New chapter */}
        <Pressable
             onPress={() => {
                navigation.navigate("Image_Chapter", {
                    data : commicData
                });
              }}
        style={styles.button}>
            <Text style={[label.secondFont, {color:'#fff'}]}>Mới nhất: Chap {data.chapter}</Text>
        </Pressable>
        {/* Chapter list */}
        <Pressable
            onPress={()=>navigation.navigate('Chapter_List',{
                data : commicData
            })}
        style={styles.button}>
            <HambergerMenu color="#fff" />
            <Text style={[label.secondFont, {color:'#fff', marginLeft:5}]}>Danh sách chapter</Text>
        </Pressable>
        {/* Commic image */}
        <Image source={data.image} style={styles.commicImg} resizeMode="stretch" />
      </ScrollView>
      {/* Comment */}

    </View>
  );
};

export default Commic_Detail;
