
import React, { Component } from 'react';
import './App.css';
import DisplayState from './components/DisplayState';

class App extends Component {
  //my state exists in the parent component of App.js, but needs to be used in DisplayState.js.
  state = {
    name: "It worked!!!",
    age: null,
    height: null,
    hobbies: []
  };

  render() {
    return (
      <div>
        <DisplayState
          //by defining properties and assigining them to values of the state, we're passing the state values to DisplayState.js to be accepted as props
          name={this.state.name}
          age={this.state.age}
          height={this.state.height}
          hobbies={this.state.hobbies}
        />
      </div>
    );
  }
}

export default App;
