import React from 'react';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

function SessionInterval(props) {
  function minusCounter(){
    if (props.interval === 1){
      return;
    }

    props.decrease();
  }

  function plusCounter(){
    if (props.interval === 60){
      return;
    }

    props.increase();
  }

  return(
    <section className='interval-outer'>
        <h4>{props.title}</h4>
      <section className='interval-inner'>
        <button disabled={props.isPlay} onClick={plusCounter}> <IoIosArrowUp/> </button>
        <p className='interval-length'> {props.interval < 10 ? '0' + props.interval : props.interval}</p>
        <button disabled={props.isPlay} onClick={minusCounter}> <IoIosArrowDown/>  </button>
      </section>
    </section>
  )
}

export default SessionInterval;
