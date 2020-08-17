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
      isPlay: false
    }

    this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);
    this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind(this);
    this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this);
    this.onDecreaseSessionLength = this.onDecreaseSessionLength.bind(this);
    this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this);
    this.onToggleInterval = this.onToggleInterval.bind(this);
    this.onResetTimer = this.onResetTimer.bind(this);
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
        sessionLength: prevState.sessionLength + 1,
        minute: prevState.minute + 1
      };
    })
  }

  onDecreaseBreakLength(){
    this.setState(prevState => {
      return {
        breakLength: prevState.breakLength - 1
      };
    })
  }

  onDecreaseSessionLength(){
    this.setState(prevState => {
      return {
        sessionLength: prevState.sessionLength - 1,
        minute: prevState.minute - 1
      };
    })
  }

  onUpdateTimerMinute(){
    this.setState(prevState => {
      return {
        minute: prevState.minute -1
      }
    })
  }

  onToggleInterval(isSession){
    if (isSession) {
      this.setState({
        minute: this.state.sessionLength
      })
    } else {
      this.setState({
        minute: this.state.breakLength
      })
    }
  }

  onResetTimer() {
    this.setState({
      minute: this.state.sessionLength
    })
  }

  render(){
    return (
      <div className="App" id="main">
        <h2> React Pomodoro </h2>
        <section className='interval-container'>
          <SessionInterval
            interval={this.state.breakLength} title='Break Time'
            increase={this.onIncreaseBreakLength}
            decrease={this.onDecreaseBreakLength}
            isPlay={this.state.isPlay}
          />
          <div className='separator'></div>
          <SessionInterval
            interval={this.state.sessionLength} title='Session Time'
            increase={this.onIncreaseSessionLength}
            decrease={this.onDecreaseSessionLength}
            isPlay={this.state.isPlay}
          />
        </section>
        <div className='separator'></div>
        <Timer
          timerMinute={this.state.minute}
          timerHour={this.state.hour}
          breakTimer={this.state.breakLength}
          updateTimerMinute={this.onUpdateTimerMinute}
          toggleInterval={this.onToggleInterval}
          resetTimer={this.onResetTimer}
        />
      </div>
    );
  }
}

export default App;
