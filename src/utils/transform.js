export function latLng2Pixel(latLng, map) {
  const topRight = map.getProjection().fromLatLngToPoint(map.getBounds().getNorthEast())
  const bottomLeft = map.getProjection().fromLatLngToPoint(map.getBounds().getSouthWest())
  const scale = Math.pow(2, map.getZoom())
  const worldPoint = map.getProjection().fromLatLngToPoint(latLng)
  return [(worldPoint.x - bottomLeft.x) * scale, (worldPoint.y - topRight.y) * scale]
}
