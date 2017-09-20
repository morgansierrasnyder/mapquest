import React from 'react'
import glamorous from 'glamorous'

import MapComponent from '../MapComponent'
import MarkerIcon from './Icon'
import Card from '../Card'

const placeholder = 'For instance, on the planet Earth, man had always assumed that he was more intelligent than dolphins because he had achieved so much—the wheel, New York, wars and so on—whilst all the dolphins had ever done was muck about in the water having a good time. But conversely, the dolphins had always believed that they were far more intelligent than man—for precisely the same reasons.'

const Marker = (props) => {
  const {
    lat,
    lng,
    $hover
  } = props

  const data = props.data || {}
  const name = data.name || 'EdCorps'

  return (
    <MapComponent w={420} h={202} lat={lat} lng={lng}>
      <Card active={$hover} title={name} description={placeholder} />
      <MarkerIcon active={$hover} w={40} h={52} />
    </MapComponent>
  )
}

export default Marker
