import React from 'react'
import { ScrollView, Text, View, Picker, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import SafeAreaView from 'react-native-safe-area-view';
import { DrawerItems } from 'react-navigation-drawer';
import { WHITE, LGRAY, MGRAY, YELLOW, TEAL } from '../static/colors.js'
import s from 'styled-components'

const Header = s.View`
  padding: 20px 10px;
  background-color: ${TEAL};
`

const HeaderText = s.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${WHITE};
  display: flex;
  flex-direction: row;
`

const CityDropdown = s.Text`
  font-size: 14px;
  font-weight: bold;
  padding: 14px;
  display: flex;
  flex-direction: row;
`

const Divider = s.View`
  height: 1px;
  background-color: ${LGRAY}
`

class Drawer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      city: '',
      cities: [],
      citySelect: false
    }
  }

  componentDidMount() {
    fetch('https://urbo-server.herokuapp.com/cities')
    .then(resp => resp.json())
    .then(cities => this.setState({ cities }))
  }

  render () {
    const { cities, city, citySelect } = this.state
    return (
      <ScrollView>
        <SafeAreaView>
          <Header>
              <HeaderText>
                <Icon name='user-circle' size={20}/>
                {' '} Eva Killenberg
              </HeaderText>
          </Header>
          <TouchableOpacity onPress={() => this.setState({ citySelect: !citySelect })}>
            <CityDropdown>
              Change city {' '}
              { citySelect ? <Icon name='chevron-up' size={12}/> : <Icon name='chevron-down' size={12}/> }
            </CityDropdown>
          </TouchableOpacity>
          { citySelect &&
            <Picker
              selectedValue={city}
              style={{ margin: 0, padding: 0, width: '100%'}}
              onValueChange={value =>
                this.setState({ city: value, citySelect: false })
              }>
              { cities.map(city => <Picker.Item label={city.name} value={city.name} /> ) }
            </Picker>
          }
          <Divider />
          <DrawerItems {...this.props} />
        </SafeAreaView>
      </ScrollView>
    )
  }
}

export default Drawer;
