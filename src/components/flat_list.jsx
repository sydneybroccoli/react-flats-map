import React from 'react';
import { Flat } from './flat.jsx';

export class FlatList extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.selected(event.target.parentElement.id);

    // TOGGLE ACTIVE CLASS
    document.querySelectorAll('.active-card').forEach((item) => {
      item.classList.remove('active-card');
    })
    event.target.classList.add('active-card');
  }

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
              clickAction={this.handleClick} />
          );
        })}
      </div>
    );
  }
}
