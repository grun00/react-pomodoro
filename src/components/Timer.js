import React, { Component } from 'react';

class Timer extends Component {
  constructor() {
    super();

    this.state = {
      isPaused: false,
      timerSecond: 0
    }
  }
  render() {
    return (
      <section>
        <section>
          <h4> {this.state.isPaused === true? "Paused" : "Running"}</h4>
          <span> {this.props.timerHour < 10 ? '0' + this.props.timerHour : this.props.timerHour }</span>
          <span> {this.props.timerMinute < 10? '0' + this.props.timerMinute : this.props.timerMinute } </span>
          <span> {this.state.timerSecond < 10? '0' + this.state.timerSecond : this.state.timerSecond } </span>

        </section>
      </section>
    )
  }
}

export default Timer;
