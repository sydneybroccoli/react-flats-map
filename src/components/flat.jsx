import React from 'react';

export class Flat extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.selectFlat(this.props.index);
  }

  render() {
    return(
      <div
        className={this.props.active ? 'card active' : 'card'}
        style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${this.props.flat.imageUrl})` }}
        id={'flat-' + this.props.flat.id}
        onClick={this.handleClick} >

        <div className="card-category">
          {this.props.flat.price} {this.props.flat.priceCurrency}
        </div>

        <div className="card-description">
          <h2>{this.props.flat.name}</h2>
        </div>

        <a
          href="#"
          className="card-link"></a>

      </div>
    );
  }
}
