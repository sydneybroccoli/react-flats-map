import React from 'react';

export class Flat extends React.Component {
  render() {
    return(
      <div className="card"
        style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url("https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat3.jpg")' }} >
        <div className="card-category">
          CARD CATEGORY
        </div>
        <div className="card-description">
          <h2>CARD DESCRIPTION</h2>
        </div>
        <a href="#" className="card-link"></a>
      </div>
    );
  }
}
