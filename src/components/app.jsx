import React from 'react';

import { flats as FlatsData } from '../../data/flats.js';
import { FlatList } from './flat_list.jsx';
// import { Marker } from './marker.jsx';
// import { GoogleMap } from './google_map.jsx';

export class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      flats: FlatsData
    }
  }

  render() {
    return(
      <div>
        <FlatList
          flats={this.state.flats} />

        <div className="map-container">
        </div>
      </div>
    );
  }
}
