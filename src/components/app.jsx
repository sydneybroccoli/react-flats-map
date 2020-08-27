import React from 'react';

import { flats } from '../../data/flats.js';
import { FlatList } from './flat_list.jsx';
import { FlatMap } from './flat_map.jsx';

export class App extends React.Component{
  constructor(props) {
    // DEFAULTS
    super(props);
    this.state = {
      activeFlat: flats[0],
      flats
    }

    // BIND METHODS
    this.selectFlat = this.selectFlat.bind(this);
  }

  selectFlat(index) {
    this.setState({ activeFlat: flats[index] });
  }

  render() {
    return(
      <div>
        <FlatList
          flats={this.state.flats}
          selectFlat={this.selectFlat}
          activeFlat={this.state.activeFlat} />

        <div className="map-container">
          <FlatMap
            flats={this.state.flats}
            selectFlat={this.selectFlat}
            activeFlat={this.state.activeFlat} />
        </div>
      </div>
    );
  }
}
