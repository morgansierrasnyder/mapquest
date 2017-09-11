import React from 'react'

import MarkerIcon from './Icon'

const Marker = (props) => {
  const {
    lat,
    lng,
    obj,
    active
  } = props

  if (active) {
    return (
      <div>
        <div
          lat={lat + 0.1}
          lng={lng}
          style={{ width: '100px', height: '100px', backgroundColor: '#fff' }}
        >
          Card!
        </div>
        <MarkerIcon active lat={lat} lng={lng} />
      </div>
    )
  }
  return <MarkerIcon lat={lat} lng={lng} />
}

export default Marker
