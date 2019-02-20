import React from 'react';


export default function Container(props) {
  return (
    <div className='container'>
      Hello, World {props.magic} {props.timestamp} {props.count}

      <button onClick={props.increment}>increment</button>
      <button onClick={props.decrement}>decrement</button>
    </div>
  );
}
