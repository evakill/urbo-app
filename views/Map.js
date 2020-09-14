import React from 'react'
import { View } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapHeader from '../components/MapHeader'

class Map extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      destinations: [],
      city: {},
      cities: [],
    }
  }

  componentDidMount() {
    fetch('https://urbo-server.herokuapp.com/dest')
    .then(resp => resp.json())
    .then(destinations => this.setState({ destinations }))
    fetch('https://urbo-server.herokuapp.com/cities')
    .then(resp => resp.json())
    .then(cities => this.setState({ cities, city: cities[0] }))
  }

  changeCity(id) {
    const city = this.state.cities.find(city => city._id === id)
    this.setState({ city })
  }

  render() {
    const { destinations, cities, city } = this.state
    if (!city.name) return null;
    return (
      <>
        <MapHeader
          city={city}
          cities={cities}
          changeCity={(id) => this.changeCity(id)} />
        <MapView
          provider={PROVIDER_GOOGLE}
          region={{
            latitude: city.lat,
            longitude: city.lng,
            latitudeDelta: 0.15,
            longitudeDelta: 0.04,
          }}
          style={{ width: '100%', height: '100%'}}
          showsUserLocation
          followsUserLocation >
            { destinations.map(dest => (
              <Marker
                key={dest._id}
                coordinate={{ latitude: dest.lat, longitude: dest.lng }}
              />
            ))}
        </MapView>
      </>
    )
  }
}

export default Map
