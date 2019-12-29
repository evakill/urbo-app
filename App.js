import React from 'react'
import { Text, View } from 'react-native'
import { createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Login, Signup, Map, Destination, Profile } from './views/index'

const AppNavigator = createStackNavigator({
    Login: {
      screen: Login,
    },
    Signup: {
      screen: Signup,
    },
    Map: {
      screen: Map,
    },
    Destination: {
      screen: Destination,
    },
    Profile: {
      screen: Profile,
    }
  }, {initialRouteName: 'Map'})

export default createAppContainer(AppNavigator)
