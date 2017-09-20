import React from 'react'
import glamorous from 'glamorous'

import MapComponent from '../MapComponent'
import MarkerIcon from './Icon'
import Card from '../Card'

const Marker = (props) => {
  const {
    lat,
    lng,
    obj,
    $hover
  } = props

  return (
    <MapComponent w={420} h={202} lat={lat} lng={lng}>
      <Card active />
      <MarkerIcon active w={40} h={52} />
    </MapComponent>
  )
}

export default Marker
