import React from 'react';
import { Flat } from './flat.jsx';

export class FlatList extends React.Component {
  render() {
    return(
      <div className="flat-list">
        {this.props.flats.map( (flat, index) => {
          return(
            <Flat
              key={index}
              id={index}
              name={flat.name}
              price={flat.price}
              currency={flat.priceCurrency}
              img={flat.imageUrl}
              lat={flat.lat}
              lng={flat.lng} />
          );
        })}
      </div>
    );
  }
}
