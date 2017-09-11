import React from 'react'
import glamorous from 'glamorous'

import MapContainer from '../MapContainer'
import MarkerIcon from './Icon'
import Card from '../Card'

const Marker = (props) => {
  const {
    lat,
    lng,
    obj,
    $hover
  } = props

  if ($hover) {
    return (
      <MapContainer w={400} h={190} lat={lat} lng={lng}>
        <Card />
        <MarkerIcon active />
      </MapContainer>
    )
  }
  return (
    <MapContainer w={50} h={50} lat={lat} lng={lng}>
      <MarkerIcon />
    </MapContainer>
  )
}

export default Marker
