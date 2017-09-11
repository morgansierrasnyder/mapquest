import React from 'react'
import glamorous from 'glamorous'
import GoogleMap from 'google-map-react'

import MarkerIcon from '../Marker'
import styles from './styles'
import theme from '../theme'
console.log(theme)

const KEYS = { key: 'AIzaSyAmJmE2pBOCq56D2Oo9mXjJWYnq7r3R1ds' }
const TestComponent = () => <div>MOFO</div>

const Container = glamorous.div({
  width: '100% !important',
  height: '700px'
})

const Map = () => (
  <Container>
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
      <MarkerIcon lat={42} lng={-100} size={32} fill={theme.colors.topaz} fillOpacity={0.6} />
    </GoogleMap>
  </Container>
)

export default Map
