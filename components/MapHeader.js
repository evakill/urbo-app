import React, { useState } from 'react'
import { Text, View, TouchableOpacity, Picker } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { YELLOW, WHITE, LGRAY, SNOW, YELLOW2 } from '../static/colors.js'
import s from 'styled-components'

const Header = s.View`
  background-color: ${YELLOW};
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;
  width: 100%;
  position: absolute;
  z-index: 100;
  min-height: 120px;
  padding: 45px 20px 0px 20px;
  box-shadow: 0px 2px 0px ${YELLOW2};
`

const HeaderText = s.Text`
  font-size: 26px;
  font-weight: bold;
  color: ${WHITE};
  box-shadow: 2px 2px 1px ${YELLOW2};
  align-self: center;
  padding-top: 10px;
`

const HeaderSubtext = s.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${YELLOW2};
  align-self: flex-start;
`

const HeaderIcon = s.View`
  background-color: ${YELLOW};
  position: absolute;
  bottom: -10px;
  right: 20px;
  border-radius: 20px;
  padding: 8px;
  z-index: 90;
`

const HeaderIconBorder = s.View`
  position: absolute;
  top: ${props => props.expand ? '400px' : '92px'};
  right: 17px;
  border-radius: 20px;
  height: 40px;
  width: 40px;
  border: 2px solid ${YELLOW2};
  z-index: 90;
`

const MapHeader = (props) => {
  const [expand, setExpand] = useState(false)
  const { city, cities, changeCity } = props

  return (
    <>
    <Header>
      <HeaderSubtext>
        currently exploring...
      </HeaderSubtext>
      <HeaderText>
        <Icon name='location-arrow' size={22}/>
        {' ' + city.name}
      </HeaderText>

      { expand && (
          <>
          <Picker
             selectedValue={city._id}
             style={{ height: 200, width: '100%' }}
             itemStyle={{ color: YELLOW2, fontSize: 22, fontWeight: 'bold' }}
             onValueChange={id => changeCity(id)}>
             {cities.map((city, i) => (
               <Picker.Item key={i} label={city.name} value={city._id} />
             ))}
          </Picker>

          <TouchableOpacity
            onPress={() => {}}
            style={{ paddingBottom: 20 }} >
            <HeaderText>
              <Icon name='cog' size={28}/>
              {' '} Settings
            </HeaderText>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {}}
            style={{ paddingBottom: 20 }} >
            <HeaderText>
              <Icon name='user-circle' size={26} />
              {' '} Profile
            </HeaderText>
          </TouchableOpacity>
          </>
      )}

      <HeaderIcon>
        <TouchableOpacity onPress={() => setExpand(!expand) } >
          <Icon name={expand ? 'chevron-up' : 'chevron-down'} size={18} color={YELLOW2} />
        </TouchableOpacity>
      </HeaderIcon>

    </Header>

    <HeaderIconBorder expand={expand} />
    </>
  )
}

export default MapHeader
