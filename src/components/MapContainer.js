import React from 'react'
import glamorous from 'glamorous'

const MapContainer = glamorous.div({
  position: 'absolute'
}, (props) => ({
  width: `${props.w}px`,
  height: `${props.h}px`,
  top: `${-1 * (props.h - 5)}px`,
  left: `${-1 * (props.w / 2)}px`
}))

export default MapContainer
