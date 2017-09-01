import React from 'react'
import glamorous from 'glamorous'
// import { InfoWindow } from 'react-google-maps'

import { latLng2Pixel } from '../utils/transform'

const HoverCard = glamorous.div({
  width: '250px',
  height: '100px',
  border: '2px solid red',
  backgroundColor: 'white',
  position: 'absolute',
  top: 0,
  left: 0
})

const Card = ({ position, title, description, map }) => {
  console.log(position)
  console.log(map)
  console.log(latLng2Pixel(position, map))
  return <HoverCard></HoverCard>
}

export default Card
