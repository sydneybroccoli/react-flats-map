import React from 'react';
import { Flat } from './flat.jsx';

export class FlatList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="flat-list">
        {this.props.flats.map( (flat, index) => {
          return (
            <Flat
              key={index}
              index={index}
              flat={flat}
              active={flat.name === this.props.activeFlat.name}
              selectFlat={this.props.selectFlat} />
          );
        })}
      </div>
    );
  }
}
