import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import tw from 'twrnc'

const data = [
  {
    id: 1,
    title: 'Get a ride',
    image: 'https://links.papareact.com/3pn',
    screen: 'MapScreen',
  },
  {
    id: 2,
    title: 'Order Food',
    image: 'https://links.papareact.com/28w',
    screen: 'EatsScreen',
  },
]

const NavOptions = () => {
  const navigation = useNavigation()

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={tw`rounded-xl  bg-gray-200 p-2 pl-6 pb-8 pt-4 m-2 w-40`}
        >
          <View>
            <Image source={{ uri: item.image }} style={{ width: 120, height: 120, resizeMode: 'contain' }} />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon type="antdesign" name="arrowright" color="white" style={tw`p-2 bg-black rounded-full w-10 mt-4`} />
          </View>
        </TouchableOpacity>
      )}
    />
  )
}

export default NavOptions
