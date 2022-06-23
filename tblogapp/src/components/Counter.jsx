import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

const Counter = () => {
    let [counter, setCounter] = useState(0);
  return (
      <>
        <div>Counter is {counter}</div>
        <Button onClick={()=>setCounter(counter+1)}>Click me!</Button>
    </>
  )
}

export default Counter