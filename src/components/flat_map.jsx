import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';

import { ActiveMarker, FlatMarker } from './marker.jsx';

// FIND MAP BOUNDS
// fit the map to bounds based on marker placement on map
const getMapBounds = (map, maps, markers) => {
  const bounds = new maps.LatLngBounds();

  markers.forEach((marker) => {
    bounds.extend(new maps.LatLng(
      marker.lat,
      marker.lng,
    ));
  });
  return bounds;
};

// POST API LOAD TASKS
const apiIsLoaded = (map, maps, markers) => {
  // get bounds based on markers
  const bounds = getMapBounds(map, maps, markers);
  // fit map to bounds
  map.fitBounds(bounds);
  // moves map back to markers if center/bounds change BY USER
  map.addListener(('center_changed' || 'bounds_changed'), (e) => {
    window.setTimeout(function() {
      map.fitBounds(bounds);
    }, 3000);
  });
};


export class FlatMap extends React.Component {
  // DEFAULTS
  static defaultProps = {
    center: { lat: 48.85, lng: 2.35 },
    zoom: 13
  };

  // CONSTRUCTOR
  constructor(props){
    super(props);
    this.state = {
      center: this.props.center,  // sets defaultProps center
      zoom: this.props.zoom,      // sets defaultProps zoom
      activeFlat: this.props.activeFlat,
      flats: this.props.flats
    };
  }

  // FUNCTIONS

  // RENDER
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GOOGLEMAP_API,
            language: 'en' }}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps, this.props.flats)}
          defaultZoom={this.props.zoom}

          center={this.state.center}  // variable center
          zoom={this.state.zoom}  // variable zoom
          >

        {this.props.flats.map( (flat, index) => {
          return (
            <FlatMarker
              key={index}  // REQUIRED FOR GMR
              index={index}
              lat={flat.lat} // REQUIRED FOR GMR
              lng={flat.lng}  // REQUIRED FOR GMR
              flat={flat}
              active={flat.name === this.props.activeFlat.name}
              activeFlat={this.props.activeFlat}
              selectFlat={this.props.selectFlat} />
          )
        })}

        </GoogleMapReact>
      </div>
    );
  }
}
