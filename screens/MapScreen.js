import React from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import tw from 'twrnc' //https://www.npmjs.com/package/twrnc#installation

const MapScreen = () => {
  return (
    <SafeAreaView style={tw`bg-blue-100 h-full`}>
      <View style={tw`p-5`}>
        <Text>MapScreen</Text>
      </View>
    </SafeAreaView>
  )
}

export default MapScreen
