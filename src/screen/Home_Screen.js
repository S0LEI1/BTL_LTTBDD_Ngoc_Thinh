import { View, Text, Pressable, SafeAreaView, StyleSheet } from "react-native";
import React from "react";

const Home = ({ navigation, route }) => {
  const id = 8;
  return (
    <View style={styles.container}>
      <Pressable
        style={{ backgroundColor: "cyan",justifyContent: "center", alignItems: "center"  }}
        onPress={() => {
          navigation.navigate("Image_Chapter", id);
        }}
      >
        <Text>Doc</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Home;
