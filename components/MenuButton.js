import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import s from 'styled-components'
import { WHITE, LGRAY } from '../static/colors.js'

const ButtonContainer = s.TouchableOpacity`
  position: absolute;
  width: 60px;
  height: 50px;
  border-radius: 25px;
  align-items: flex-end;
  padding-right: 10px;
  justify-content: center;
  top: 30px;
  left: -30px;
  z-index: 2;
  background-color: ${WHITE};
  box-shadow: 0px 2px 2px #666;
`

export default MenuButton = props => (
  <ButtonContainer onPress={() => props.open()}>
    <Icon name="chevron-right" size={20} color={LGRAY} />
  </ButtonContainer>
)
