import React from 'react';
import PropTypes from 'prop-types';
import controllable from 'react-controllables';
import GoogleMapReact from 'google-map-react';

import { Marker } from './marker.jsx';

export class GoogleMap extends React.Component {
  static defaultProps = {
    center: { lat: 48.85, lng: 2.35 },
    zoom: 12
  };

  handleClick(event) {
    // MAKE SELECTED ELEMENT ON MAP ACTIVE IN FLAT LIST
    document.querySelector(`.card#${event.target.parentElement.id}`).click();
  }

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GOOGLEMAP_API,
            language: 'en' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          >

        {this.props.flats.map( (flat, index) => {
          return(
            <Marker
              key={index}
              id={index}
              lat={flat.lat}
              lng={flat.lng}
              name={flat.name}
              price={flat.price}
              currency={flat.priceCurrency}
              clickAction={this.handleClick} />
          );
        })}

        </GoogleMapReact>
      </div>
    );
  }
}
