import React from 'react';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

function SessionInterval(props) {
  return(
    <section class='interval-outer'>
        <h4>{props.title}</h4>
      <section class='interval-inner'>
        <button> <IoIosArrowUp/> </button>
        <p class='interval-length'> {props.interval}</p>
        <button> <IoIosArrowDown/>  </button>
      </section>
    </section>
  )
}

export default SessionInterval;
