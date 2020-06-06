import React from 'react';

import { flats as FlatsData } from '../../data/flats.js';
import { FlatList } from './flat_list.jsx';
import { GoogleMap } from './google_map.jsx';

export class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      flats: FlatsData,
      activeFlat: FlatsData[1]
    }
    this.select = this.select.bind(this);
  }

  select(index) {
    this.setState({
      activeFlat: FlatsData[index]
    });

  }

  render() {
    return(
      <div>
        <FlatList
          flats={this.state.flats}
          selected={this.select} />

        <div className="map-container">
          <GoogleMap
            flats={this.state.flats}
            activeFlat={this.state.activeFlat} />
        </div>
      </div>
    );
  }
}
