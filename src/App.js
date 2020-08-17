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

    this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);
    this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind(this);
  }
  onIncreaseBreakLength(){
    this.setState(prevState => {
      return {
        breakLength: prevState.breakLength + 1
      };
    })
  }

  onIncreaseSessionLength(){
    this.setState(prevState => {
      return {
        sessionLength: prevState.sessionLength + 1
      };
    })
  }

  render(){
    return (
      <div className="App" id="main">
        <h2> React Pomodoro </h2>
        <section class='interval-container'>
          <SessionInterval
            interval={this.state.breakLength} title='Break Time'
            increase={this.onIncreaseBreakLength}
          />
          <div class='separator'></div>
          <SessionInterval
            interval={this.state.sessionLength} title='Session Time'
            increase={this.onIncreaseSessionLength}
          />
        </section>
        <div class='separator'></div>
        <Timer
          timerMinute={this.state.minute} timerHour={this.state.hour}
        />
      </div>
    );
  }
}

export default App;
