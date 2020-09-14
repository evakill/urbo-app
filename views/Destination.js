import React from 'react'
import { Text, View } from 'react-native'

class Destination extends React.Component {
  constructor (props) {
    super(props)

  }

  render () {
    const { openDrawer, closeDrawer } = this.props.navigation
    return (
    <View>
      <Text>Destination</Text>
    </View>
    )
  }
}

export default Destination
