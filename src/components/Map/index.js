import React from 'react'
import glamorous from 'glamorous'
import GoogleMap from 'google-map-react'

import Marker from '../Marker'
import styles from './styles'
import theme from '../theme'

const KEYS = { key: 'AIzaSyAmJmE2pBOCq56D2Oo9mXjJWYnq7r3R1ds' }

const Container = glamorous.div({
  width: '100% !important',
  height: '700px'
})

const Map = () => (
  <Container>
    <Marker lat={42} lng={-100}  />
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
      <Marker lat={42} lng={-100}  />
    </GoogleMap>
  </Container>
)

export default Map
