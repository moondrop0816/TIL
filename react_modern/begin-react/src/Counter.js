import React, { useState } from 'react';

function Counter() {
    const [number, setNumber] = useState(0);
    
    const onIncrease = () => {
        //기존값을 인자로 받음.(prevNumber=>return prevNumber+1;)
        //setNumber(number+1);
        setNumber(prevNumber => prevNumber + 1);
      }
    
      const onDecrease = () => {
        setNumber(prevNumber => prevNumber - 1);
      }
    
    return (
      <div>
        <h1>{number}</h1>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    );
  }

export default Counter;