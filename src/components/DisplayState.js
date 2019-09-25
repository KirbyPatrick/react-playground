import React, { Component } from 'react';

class DisplayState extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <p>State is equal to:</p>
        <ul>
          <li>Name: {this.props.name}</li>
          <li>Age: "Nothing Yet"</li>
          <li>Height: "Nothing Yet"</li>
          <li>Hobbies: "Nothing Yet"</li>
          <li>Item 5: "Nothing Yet"</li>
        </ul>
      </div>
    );
  }
}

export default DisplayState;