import { View, Text, Pressable } from 'react-native'
import React from 'react'

const Home = ({navigation, route}) => {
  const id =1;
  return (
    <View>
      <Pressable style={{backgroundColor:'cyan'}} onPress={()=>{
        navigation.navigate('Image_Chapter', id)
      }}>
        <Text>Doc</Text>
      </Pressable>
    </View>
  )
}

export default Home