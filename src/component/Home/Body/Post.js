import { View, Text, Pressable } from 'react-native'
import React from 'react'

const Post = ({navigation, route}) => {
  const {category, data} = route.params;
  console.log(category);
  console.log(data);
  return (
    <View>
      <Pressable onPress={()=>{
        navigation.navigate('Profile')
      }}>
        <Text>{JSON.stringify(category)}</Text>
      </Pressable>
    </View>
  )
}

export default Post