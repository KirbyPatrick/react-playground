import React, { Component } from 'react';

class ChangeState extends Component {

  sendData = e => {
    this.props.parentCallback(e.target.value)
  }

  render() {
    return (
      <div className="boxyRed">
        <form action="">
          <label htmlFor="">Set Name: </label>
          <input onChange={this.sendData} type="text" name="name" id="myTextInput" />
        </form>
      </div>
    );
  }
}

export default ChangeState;