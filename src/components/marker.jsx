import React from 'react';

export class Marker extends React.Component {
  render() {
    return (
      <div
        className="marker"
        onClick={this.props.clickAction}
        id={'flat-' + this.props.id} >
        <span
          className="markerText"
          title={this.props.name} >
          {this.props.price} {this.props.currency}
        </span>
      </div>
    )
  }
}
