import { StyleSheet, Text, View } from 'react-native'
//Set up redux
import { Provider } from 'react-redux'
import { store } from './store'
//Screens
import HomeScreen from './screens/HomeScreen'
import MapScreen from './screens/MapScreen'
//Navigation
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          {/* Similar a react router */}
          <Stack.Navigator>
            {/* Home */}
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                headerShown: false,
              }}
            />
            {/* Map */}
            <Stack.Screen
              name="MapScreen"
              component={MapScreen}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
          {/* Similar a react router */}
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
