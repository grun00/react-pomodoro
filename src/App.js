import React, { Component } from 'react';
import './App.css';
import SessionInterval from './components/Interval';

class App extends Component{
  constructor(){
    super();

    this.state = {
      breakLength: 5,
      sessionLength: 25
    }
  }
  render(){
    return (
      <div className="App">
        <h2> React Pomodoro </h2>
        <SessionInterval interval={this.state.breakLength} title='Break Time'/>
        <SessionInterval interval={this.state.sessionLength} title='Session Time'/>
      </div>
    );
  }
}

export default App;
