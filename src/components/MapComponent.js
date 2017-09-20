import React from 'react'
import glamorous from 'glamorous'

const MapComponent = glamorous.div({
  position: 'absolute'
}, (props) => ({
  width: `${props.w}px`,
  height: `${props.h}px`,
  top: `${-1 * (props.h - 4)}px`,
  left: `${-1 * (props.w / 2)}px`
}))

export default MapComponent
