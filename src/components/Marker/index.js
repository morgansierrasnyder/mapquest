import React from 'react'
import glamorous from 'glamorous'
import { pick } from 'lodash'

const pathProps = (props) => (
  // keep it simple with svgs for now
  pick(props, [
    'fill',
    'fillOpacity',
    'stroke',
    'strokeOpacity',
    'strokeWidth'
  ])
)

const Icon = glamorous.svg(
  {
    display: 'inline-block'
  },
  (props => ({
    ...(props.size && {
      width: props.size,
      height: props.size
    }),
    ...({
      '> path': pathProps(props)
    })
  }))
)

const MarkerIcon = (props) => (
  <Icon
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="1024"
    height="1024"
    viewBox="0 0 1024 1024"
    {...props}
  >
    <title>Map Marker</title>
    <path
      fill="currentColor"
      d="M658.286 365.714q0-60.571-42.857-103.429t-103.429-42.857-103.429 42.857-42.857 103.429 42.857 103.429 103.429 42.857 103.429-42.857 42.857-103.429zM804.571 365.714q0 62.286-18.857 102.286l-208 442.286q-9.143 18.857-27.143 29.714t-38.571 10.857-38.571-10.857-26.571-29.714l-208.571-442.286q-18.857-40-18.857-102.286 0-121.143 85.714-206.857t206.857-85.714 206.857 85.714 85.714 206.857z">
    </path>
  </Icon>
)

export default MarkerIcon
