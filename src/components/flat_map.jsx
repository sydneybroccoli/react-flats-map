import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';

import { ActiveMarker, FlatMarker } from './marker.jsx';


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

    // this.handleMarkerClick = this.handleMarkerClick.bind(this);
  }

  // FUNCTIONS
  // create a center object with the active flats lat/lng
  center() {
    return {
      lat: this.state.activeFlat.lat,
      lng: this.state.activeFlat.lng
    }
  }

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
          defaultZoom={this.props.zoom}
          defaultCenter={this.props.center}

          center={this.center()}  // variable center
          zoom={this.state.zoom}  // variable zoom

          // functions
          // onChildClick={this._onChildClick}
          // onChildMouseEnter:{this.onChildMouseEnter}
          // onChildMouseLeave:{this.onChildMouseLeave}
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
