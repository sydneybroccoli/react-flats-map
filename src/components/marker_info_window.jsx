import React from 'react';

export class MarkerInfoWindow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flat-marker-info-window" id={'flat-' + this.props.id}>
        <h5>{this.props.name}</h5>
        <br><br>
        <p>{this.props.rate}</p>
      </div>
    )
  }
}
