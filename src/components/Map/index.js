import React from 'react'
import glamorous from 'glamorous'
import GoogleMap from 'google-map-react'
import { omit } from 'lodash'

import Marker from '../Marker'
import styles from './styles'
import theme from '../theme'

const KEYS = { key: 'AIzaSyAmJmE2pBOCq56D2Oo9mXjJWYnq7r3R1ds' }

const Container = glamorous.div({
  width: '100% !important',
  height: '700px'
})

class Map extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      markers: props.markers
    }
  }

  render() {
    const { markers } = this.state

    return (
      <Container>
        <Marker />
        <GoogleMap
          bootstrapURLKeys={KEYS}
          defaultZoom={4}
          defaultCenter={{ lat: 42, lng: -100 }}
          options={{
            scrollwheel: false,
            mapTypeControl: false,
            draggable: true,
            scaleControl: false,
            mapTypeId: 'roadmap',
            styles: styles
          }}
        >
          {markers.map(marker => (
            <Marker
              lat={marker.position.lat}
              lng={marker.position.lng}
              data={omit(marker, 'position')}
            />
          ))}
        </GoogleMap>
      </Container>
    )
  }
}

export default Map
