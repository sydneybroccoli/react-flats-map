import React from 'react';

export class Flat extends React.Component {
  render() {
    return(
      <div
        className="card"
        style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${this.props.img})` }}
        id={this.props.id}
        onClick={this.props.clickAction} >

        <div className="card-category">
          {this.props.price} {this.props.currency}
        </div>

        <div className="card-description">
          <h2>{this.props.name}</h2>
        </div>

        <a
          href="#"
          className="card-link"></a>

      </div>
    );
  }
}
