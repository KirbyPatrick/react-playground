
import React, { Component } from 'react';
import './App.css';
import DisplayState from './components/DisplayState';
import ChangeState from './components/ChangeState';

class App extends Component {
  //my state exists in the parent component of App.js, but needs to be used in DisplayState.js.

  state = {
    name: "Max",
    age: 22,
    height: "6'0",
    hobbies: ["Jogging"],
    color: "Red"
  };

  callbackFunction = (changeStateData) => {
    this.setState({
      name: changeStateData
    })
  }

  render() {
    // console.log("this on app.js", this);
    return (
      <div>
        <DisplayState
          //by defining properties and assigining them to values of the state, we're passing the state values to DisplayState.js to be accepted as props
          name={this.state.name}
          age={this.state.age}
          height={this.state.height}
          hobbies={this.state.hobbies}
          color={this.state.color}
        />
        {/* ChangeState has an input whose value will change the state on app.js. To do this it's value must be passed to the parent component of app.js */}
        <ChangeState
          parentCallback={this.callbackFunction}
        />
      </div>
    );
  }
}

export default App;
