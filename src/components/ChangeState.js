import React, { Component } from 'react';

class ChangeState extends Component {

  sendData = () => {
    this.props.parentCallback("hi")
  }


  render() {
    console.log("this on ChangeState.js", this);
    return (
      <div>
        <input type="text" name="name" id="myTextInput" />
        <button onClick={this.sendData}>Click to send data from child to parent component</button>
      </div>
    );
  }
}

export default ChangeState;