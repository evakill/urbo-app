import React from 'react'
import { Text, View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Login, Signup, Map, Destination, Profile } from './views/index'

const LoginStack = createStackNavigator({
  Login,
  Signup
}, {
  initialRouteName: 'Signup',
  headerMode: 'none'
})

const AppStack = createStackNavigator({
  Map,
  Profile,
  Destination
}, {
  initialRouteName: 'Map',
  headerMode: 'none'
})

const AppNavigator = createStackNavigator({
  LoginStack,
  AppStack
}, {
  initialRouteName: 'AppStack',
  headerMode: 'none'
})

export default createAppContainer(AppNavigator)
