import React from 'react';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

function SessionInterval(props) {
  function minusCounter(){
    if (props.interval === 1){
      return;
    }
  }

  function plusCounter(){
    if (props.interval === 60){
      return;
    }

    props.increase();
  }

  return(
    <section class='interval-outer'>
        <h4>{props.title}</h4>
      <section class='interval-inner'>
        <button onClick={plusCounter}> <IoIosArrowUp/> </button>
        <p class='interval-length'> {props.interval}</p>
        <button onClick={minusCounter}> <IoIosArrowDown/>  </button>
      </section>
    </section>
  )
}

export default SessionInterval;
