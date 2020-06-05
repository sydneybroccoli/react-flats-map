import React from 'react';
import { Flat } from './flat.jsx';

export class FlatList extends React.Component {
  render() {
    return(
      <div className="flat-list">
        {this.props.flats.map( flat => {
          return(
            <Flat
              key={flat.id}
              name={flat.name}
              price={flat.price}
              currency={flat.priceCurrency}
              img={flat.imageUrl} />
          );
        })}
      </div>
    );
  }
}
