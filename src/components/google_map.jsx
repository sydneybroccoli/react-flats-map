import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Marker } from './marker.jsx';

export class GoogleMap extends React.Component {
  static defaultProps = {
    center: {
      lat: 48.85,
      lng: 2.35
    },
    zoom: 12
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLEMAP_API }}
          defaultCenter={this.props.center}
          zoom={this.props.zoom}
        >

        {this.props.flats.map( (flat, index) => {
          return(
            <Marker
              key={index}
              lat={flat.lat}
              lng={flat.lng} />
          );
        })}

        </GoogleMapReact>
      </div>
    );
  }
}
