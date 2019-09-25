import React, { Component } from 'react';

class DisplayState extends Component {
  render() {
    return (
      <div className="boxyBlue">
        <i>DisplayState.js</i>
        <p>State is equal to:</p>
        <ul>
          <li>Name: {this.props.name}</li>
          <li>Age: {this.props.age}</li>
          <li>Height: {this.props.height}</li>
          <li>Hobbies: {this.props.hobbies}</li>
          <li>Favorite color: {this.props.color}</li>
        </ul>
      </div>
    );
  }
}

export default DisplayState;