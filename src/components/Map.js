/*global google*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import EdCorps from '../data/edcorps';
import { withGoogleMap, GoogleMap, Marker, Polyline, InfoWindow } from "react-google-maps";


const InitialMap = withGoogleMap(props => {
  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={props.center}
      defaultOptions={{
        scrollwheel: false,
        mapTypeControl: false,
        draggable: true,
        scaleControl: false,
        mapTypeId: 'roadmap'
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
            <InfoWindow onCloseClick={() => props.onMarkerClose(marker)}>
              <div id="info-window">
                <div>Students: {marker.infoContent.studentsCount}</div>
                <div>Routes: {marker.infoContent.routesCount}</div>
              </div>
            </InfoWindow>
          )}

          {marker.hover && (
            <InfoWindow
              onCloseClick={() => props.onMarkerClose(marker)}>
              <div id="info-window">
                <div>Bus stop: <em>{marker.infoContent.name}</em></div>
              </div>
            </InfoWindow>
          )}
        </Marker>
      ))}
      <Polyline
        path={props.coords}
      />
    </GoogleMap>
  )
});

class MapWithStops extends Component {
  constructor() {
    super();
    this.state = {
      markers: EdCorps.map(edCorp => {
        const { lat, lng } = edCorp.geoJSON.properties
        return {
          position: { lat: parseFloat(lat), lng: parseFloat(lng) },
          showInfo: false,
          infoContent: {
            name: edCorp["EdCorps Name"],
            studentsCount: 100,
            routesCount: 5 
          }
        }
      }),    
      coords: EdCorps.map(edCorp => {
        const { lat, lng } = edCorp.geoJSON.properties
        return {
          lat: parseFloat(lat), 
          lng: parseFloat(lng)
        }
      }),
      showMap: true
    };

    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.handleMarkerClose = this.handleMarkerClose.bind(this);
    this.handleMarkerHover = this.handleMarkerHover.bind(this);
    this.handleMarkerHide = this.handleMarkerHide.bind(this);
    this.handleHideMapClick = this.handleHideMapClick.bind(this);
    this.handleShowMapClick = this.handleShowMapClick.bind(this);
  }
  
  handleMarkerClick(targetMarker) {
    console.log("click on this marker", targetMarker);
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

  handleMarkerClose(targetMarker) {
    this.setState({
      markers: this.state.markers.map(marker => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: false,
            hover: false
          };
        }
        return marker;
      }),
    });
  }

  handleMarkerHover(targetMarker) {
    console.log("Marker has been hovered.")
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
    console.log("info window has been removed.")
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
  
  minMaxLatAndLng(EdCorps) {
    console.log(EdCorps[0].geoJSON.properties.lat)
    console.log(EdCorps[0].geoJSON.properties.lng)
    console.log(parseFloat(EdCorps[0].geoJSON.properties.lat))
    console.log(parseFloat(EdCorps[0].geoJSON.properties.lng))

    const listOfLat = EdCorps.map(obj => parseFloat(obj.geoJSON.properties.lat));
    const listOfLng = EdCorps.map(obj => parseFloat(obj.geoJSON.properties.lng));
    const lat = (Math.min(...listOfLat) + Math.max(...listOfLat)) / 2;
    const lng = (Math.min(...listOfLng) + Math.max(...listOfLng)) / 2;
  
    return {lat, lng} 
  }
  
  render() {
    const mapCenter = this.minMaxLatAndLng(EdCorps);

    return (
      <div>
        {!this.state.showMap && 
          <a className="btn-show-map" onClick={this.handleShowMapClick}>Show map</a>
        }
        {this.state.showMap &&
          <div className="map">
            <a className="btn-hide-map" onClick={this.handleHideMapClick}>Hide map</a>
            <InitialMap
              containerElement={
                <div style={{ height: `100%` }} />
              }
              mapElement={
                <div style={{ height: `100%` }} />
              }
              center={mapCenter}
              markers={this.state.markers}
              coords={this.state.coords}
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

export default MapWithStops;