import React, { Component } from 'react';
import { IoIosPlay, IoIosPause, IoIosSquare } from "react-icons/io";

class Timer extends Component {
  constructor() {
    super();

    this.state = {
      isPaused: true,
      timerSecond: 0
    }
  }
  render() {
    return (
      <React.Fragment>
        <section class='timer-outer'>
          <h4> {this.state.isPaused === true? "Paused" : "Running"}</h4>
          <section class='timer-inner'>
            <span> {this.props.timerHour < 10 ? '0' + this.props.timerHour : this.props.timerHour}</span>
            <span> :{this.props.timerMinute < 10? '0' + this.props.timerMinute : this.props.timerMinute}: </span>
            <span> {this.state.timerSecond < 10? '0' + this.state.timerSecond : this.state.timerSecond} </span>
          </section>
        </section>
        <section class='timer-under'>
          <button> <IoIosPlay/> </button>
          <button> <IoIosPause/> </button>
          <button> <IoIosSquare/> </button>
        </section>
      </React.Fragment>
    )
  }
}

export default Timer;
