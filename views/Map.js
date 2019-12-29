import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Form, Picker } from 'native-base'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

class Map extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      destinations: [],
      city: {},
      cities: [],
      language: 'test'
    }
  }
  componentDidMount() {
    const params = { mode: 'no-cors' }
    fetch('https://urbo-server.herokuapp.com/dest')
    .then(resp => resp.json())
    .then(destinations => this.setState({ destinations }))
    fetch('https://urbo-server.herokuapp.com/cities')
    .then(resp => resp.json())
    .then(cities => this.setState({ cities, city: cities[0] }))
  }

  render() {
    const { destinations, cities, city } = this.state
    console.log(cities)
    return (
    <View style={{ display: 'flex', flexDirection: 'column' }}>
      <Form>
        <Picker
          selectedValue={this.state.language}
          style={{ height: 20, width: '100%' }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({language: itemValue})
          }
          mode='dropdown'>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </Form>
      <View style={{ height: '90%' }}>
        <MapView
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 39.9526,
            longitude: -75.1652,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={{ width: '100%', height: '100%'}}
        />
      </View>
    </View>
    )
  }
}

export default Map
