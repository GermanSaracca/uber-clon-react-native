import React from 'react'
import { StyleSheet, Text, SafeAreaView, View, Image } from 'react-native'
import GlobalStyles from '../styles/GlobalStyles'
import tw from 'twrnc' //https://www.npmjs.com/package/twrnc#installation
import NavOptions from '../components/NavOptions'

const HomeScreen = () => {
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <View style={tw`p-5`}>
        <Image
          source={{
            uri: 'https://links.papareact.com/gzs',
          }}
          style={{
            width: 100,
            height: 100,
            resizeMode: 'contain',
          }}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
