import React from 'react';
import { FaMapMarker, FaMapMarkerAlt } from 'react-icons/fa';

const CustomIcon = (customTag, props) => {
  return (
    React.createElement(
      customTag,
      {
        className:'flat-marker-icon'
      }
    )
  )
}

export class FlatMarker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: this.props.active, hover: false }
    this.handleClick = this.handleClick.bind(this);
    this.handleHover = this.handleHover.bind(this);
  }

  // FUNCTIONS
  handleClick() {
    this.setState({ active: !this.state.active });
    this.props.selectFlat(this.props.index);
  }
  handleHover() {}

  // RENDER
  render() {
    return (
      <div
        id={'flat-marker-' + this.props.flat.index}
        className={this.props.active ? 'marker active' : 'marker'}
        onClick={this.handleClick} >

        { CustomIcon(FaMapMarkerAlt, this.props) }
      </div>
    )
  }
}

// export class ActiveMarker extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div className='active-flat-marker' id={'flat-' + this.props.id}>
//         { CustomIcon(FaMapMarker, this.props) }
//       </div>
//     )
//   }
// }


// OLD MARKER REACT COMPONENT
// export class Marker extends React.Component {
//   render() {
//     return (
//       <div
//         className="marker"
//         onClick={this.props.clickAction}
//         id={'flat-' + this.props.id} >
//         <span
//           className="markerText"
//           title={this.props.name} >
//           {this.props.price} {this.props.currency}
//         </span>
//       </div>
//     )
//   }
// }
