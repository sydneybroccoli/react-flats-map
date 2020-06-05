import React from 'react';

import { Flat } from './flat.jsx';
import { FlatList } from './flat_list.jsx';
import { Marker } from './marker.jsx';
import { GoogleMap } from './google_map.jsx';

export class App extends React.Component{
  render() {
    return(
      <div>
        <div className="flat-list">
          <Flat />
        </div>

        <div className="map-container">
        </div>
      </div>
    );
  }
}
