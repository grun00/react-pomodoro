import React, { Component } from 'react';
import './App.css';
import SessionInterval from './components/Interval';
import Timer from './components/Timer';

class App extends Component{
  constructor(){
    super();

    this.state = {
      breakLength: 5,
      sessionLength: 25,
      minute: 25,
      hour: 0,
    }
  }
  render(){
    return (
      <div className="App" id="main">
        <h2> React Pomodoro </h2>
        <section class='interval-container'>
          <SessionInterval interval={this.state.breakLength} title='Break Time'/>
          <div class='separator'></div>
          <SessionInterval interval={this.state.sessionLength} title='Session Time'/>
        </section>
        <div class='separator'></div>
        <Timer timerMinute={this.state.minute} timerHour={this.state.hour}/>
      </div>
    );
  }
}

export default App;
