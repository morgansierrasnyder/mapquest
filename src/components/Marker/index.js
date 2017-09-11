import React from 'react'
import glamorous from 'glamorous'

import MapContainer from '../MapContainer'
import MarkerIcon from './Icon'

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
        <div
          style={{ width: '400px', height: '140px', backgroundColor: '#fff' }}
        >
          Card!
        </div>
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
