import React from 'react'
import { Text, View } from 'react-native'
import MenuButton from '../components/MenuButton'
import s from 'styled-components'

const Container = s.View`
  display: flex;
  flex-direction: column;
  margin-top: 20;
  flex: 1;
`

class Profile extends React.Component {
  constructor (props) {
    super(props)

  }

  render () {
    const { openDrawer, closeDrawer } = this.props.navigation
    return (
    <Container>
      <Text>Profile</Text>
    </Container>
    )
  }
}

export default Profile
