import React from 'react';

function SessionInterval(props) {
  return(
    <section>
      <h4>{props.title}</h4>
      <button> - </button>
      <p> {props.interval}</p>
      <button> + </button>
    </section>
  )
}

export default SessionInterval;
