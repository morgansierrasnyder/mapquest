/*global google*/
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'


import EdCorps from '../../data/edcorps'
import mapStyle from './mapStyle'


const GMap = withGoogleMap(props => {
  return (
    <GoogleMap
      defaultZoom={4}
      defaultCenter={{ lat: 42, lng: -100 }}
      defaultOptions={{
        scrollwheel: false,
        mapTypeControl: false,
        draggable: true,
        scaleControl: false,
        mapTypeId: 'roadmap',
        styles: mapStyle
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
            console.log('TODO: Open Panel')
          )}

          {marker.hover && (
            <InfoWindow>
              <div id="info-window">
                <div>{marker.name}</div>
                <div>{marker.city}, {marker.state}</div>
                <div>{marker.level}</div>
              </div>
            </InfoWindow>
          )}
        </Marker>
      ))}
    </GoogleMap>
  )
});

class EdCorpsMap extends Component {
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
      }),    
      showMap: true
    };

    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.handleMarkerHover = this.handleMarkerHover.bind(this);
    this.handleMarkerHide = this.handleMarkerHide.bind(this);
    this.handleHideMapClick = this.handleHideMapClick.bind(this);
    this.handleShowMapClick = this.handleShowMapClick.bind(this);
  }
  
  handleMarkerClick(targetMarker) {
    console.log("clicked on marker", targetMarker);
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

  handleHideMapClick() {
    this.setState({ showMap: false });
  }

  handleShowMapClick() {
    this.setState({ showMap: true })
  }
  
  render() {
    return (
      <div>
        {!this.state.showMap && 
          <a className="btn-show-map" onClick={this.handleShowMapClick}>Show map</a>
        }
        {this.state.showMap &&
          <div className="map">
            <a className="btn-hide-map" onClick={this.handleHideMapClick}>Hide map</a>
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
        }
      </div>  
    );
  }
}

export default EdCorpsMap
