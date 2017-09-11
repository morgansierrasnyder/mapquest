/*global google*/
import * as React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'


import EdCorps from '../../data/edcorps'
import styles from './styles'
import CustomMarker from './Marker'
import Card from '../Card'

const GMap = withGoogleMap(props => {
  return (
    <GoogleMap
      onIdle={() => {}}
      defaultZoom={4}
      defaultCenter={{ lat: 42, lng: -100 }}
      defaultOptions={{
        scrollwheel: false,
        mapTypeControl: false,
        draggable: true,
        scaleControl: false,
        mapTypeId: 'roadmap',
        styles: styles
      }}
    >

      {props.markers.map((marker, index) => (
        <Marker
          key={index}
          position={marker.position}
          onClick={() => props.onMarkerClick(marker)}
          onMouseOver={() => props.onMarkerHover(marker)}
          onMouseOut={() => props.onMarkerHide(marker)}
        >
          {marker.showInfo && (
            console.log(props)
            //console.log('TODO: Open Panel')
          )}

          {marker.hover && (
            <Card
              position={marker.position}
            >
              marker.name
            </Card>
          )}
        </Marker>
      ))}
    </GoogleMap>
  )
});

class EdCorpsMap extends React.Component {
  constructor() {
    super();
    this.state = {
      markers: EdCorps.map(edCorp => {
        const { lat, lng } = edCorp.geoJSON.properties
        return {
          position: { lat: parseFloat(lat), lng: parseFloat(lng) },
          name: edCorp['EdCorps Name'],
          level: edCorp['School Level'],
          city: edCorp.geoJSON.properties.city,
          state: edCorp.geoJSON.properties.state
        }
      })
    };

    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.handleMarkerHover = this.handleMarkerHover.bind(this);
    this.handleMarkerHide = this.handleMarkerHide.bind(this);
  }

  handleMarkerClick(targetMarker) {
    console.log('PROPS', this.props)
    console.log('STATE', this.state)
    this.setState({
      markers: this.state.markers.map(marker => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: true,
            hover: false
          };
        }
        return marker;
      }),
    });
  }

  handleMarkerHover(targetMarker) {
    console.log("hovered marker", targetMarker)
    this.setState({
      markers: this.state.markers.map(marker => {
        if (marker === targetMarker) {
          return {
            ...marker,
            hover: true
          };
        }
        return marker;
      }),
    });
  }

  handleMarkerHide(targetMarker) {
    this.setState({
      markers: this.state.markers.map(marker => {
        if (marker === targetMarker) {
          return {
            ...marker,
            hover: false
          };
        }
        return marker;
      }),
    });
  }

  render() {
    return (
      <div className="map">
        <GMap
          containerElement={
            <div style={{ height: `100%` }} />
          }
          mapElement={
            <div style={{ height: `100%` }} />
          }
          markers={this.state.markers}
          onMarkerClick={this.handleMarkerClick}
          onMarkerClose={this.handleMarkerClose}
          onMarkerHover={this.handleMarkerHover}
          onMarkerHide={this.handleMarkerHide}
        />
      </div>
    )
  }
}

export default EdCorpsMap
