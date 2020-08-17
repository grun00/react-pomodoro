import React, { Component } from 'react';
import { IoIosPlay, IoIosPause, IoIosSquare } from "react-icons/io";

class Timer extends Component {
  constructor() {
    super();

    this.state = {
      isPaused: true,
      timerSecond: 0,
      intervalId: 0
    }

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.refresh = this.refresh.bind(this);
    this.minusTimer = this.minusTimer.bind(this);
  }

  play(){
    let intervalId = setInterval(this.minusTimer, 1000);

    this.setState({
      intervalId: intervalId
    })
  }

  minusTimer() {
    switch(this.state.timerSecond) {
      case 0:
        this.props.updateTimerMinute()
        this.setState({
          timerSecond: 59
        })
        break;
      default:
        this.setState(prevState => {
          return {
            timerSecond: prevState.timerSecond - 1
          }
        })
        break;
    }
  }

  pause(){
    clearInterval(this.state.intervalId);
  }

  refresh() {
    this.pause();
    this.props.resetTimer();
    this.setState({
      timerSecond: 0
    })
  }

  render() {
    return (
      <React.Fragment>
        <section className='timer-outer'>
          <h4> {this.state.isPaused === true? "Paused" : "Running"}</h4>
          <section className='timer-inner'>
            <span> {this.props.timerHour < 10 ? '0' + this.props.timerHour : this.props.timerHour}</span>
            <span> : </span>
            <span> {this.props.timerMinute < 10? '0' + this.props.timerMinute : this.props.timerMinute} </span>
            <span> : </span>
            <span> {this.state.timerSecond < 10? '0' + this.state.timerSecond : this.state.timerSecond} </span>
          </section>
        </section>
        <section className='timer-under'>
          <button onClick={this.play}> <IoIosPlay/> </button>
          <button onClick={this.pause}> <IoIosPause/> </button>
          <button onClick={this.refresh}> <IoIosSquare/> </button>
        </section>
      </React.Fragment>
    )
  }
}

export default Timer;
