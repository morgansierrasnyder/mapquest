import { filter } from 'lodash'

const buildMarkers = (edCorpsData) => (
  filter(edCorpsData.map(edCorp => {
    const { lat, lng } = edCorp.geoJSON.properties
    if (!lat || !lng) {
      return
    }
    return {
      position: { lat: parseFloat(lat), lng: parseFloat(lng) },
      name: edCorp['EdCorps Name'],
      level: edCorp['School Level'],
      city: edCorp.geoJSON.properties.city,
      state: edCorp.geoJSON.properties.state
    }
  }))
)

export default buildMarkers
