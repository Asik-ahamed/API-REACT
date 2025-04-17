import React from 'react'
import Posts from './posts.jsx'
import './App.css'
import useCounter from './usecounter.jsx'
import { useRef, useReducer, useEffect } from 'react'
import SingleUser from './SingleUser.jsx'


const reducer = (state, action) => {
  switch (action.type) {
    case 'start':
      return { ...state, isRunning: true };
    case 'stop':
      return { ...state, isRunning: false };
    case 'reset':
      return { ...state, time: 0, isRunning: false };
    case 'tick':
      return { ...state, time: state.time + 1 };
    default:
      return state;
  }
};

const App = () => {
  const { count, increment, decrement, reset } = useCounter(0);
  const countRef = useRef(null);
  const stopwatchRef = useRef(null);

  const changeColor = () => {
    const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
    if (countRef.current) {
      countRef.current.style.color = randomColor;
    }
    if (stopwatchRef.current) {
      stopwatchRef.current.style.color = randomColor;
    }
  };

  const initialstate = {
    isRunning: false,
    time: 0
  }

    
    const [state, dispatch] = useReducer(reducer, initialstate)
    useEffect(() => {
      let timer = 0;
      if (!state.isRunning){
        return;
      }
      timer = setInterval(() => dispatch({type: "tick"}),1000)
      return () => {
        clearInterval(timer);
        timer = 0;
      }
    },[state.isRunning]);
  
  return (
    <div className='container'>
       <h2 ref={stopwatchRef}>Stopwatch: {state.time}s</h2>
       <button onClick={() => { dispatch({ type: 'start' }); changeColor(); }}>Start</button>
       <button onClick={() => { dispatch({ type: 'stop' }); changeColor(); }}>Stop</button>
       <button onClick={() => { dispatch({ type: 'reset' }); changeColor(); }}>Reset Timer</button>

       <h2 ref={countRef}>Counter: {count}</h2>
       <button onClick={() => { increment(); changeColor(); }}>Increment</button>
       <button onClick={() => { decrement(); changeColor(); }}>Decrement</button>
       <button onClick={() => { reset(); changeColor(); }}>Reset</button>

        <Posts/>
        <SingleUser/>
    </div>
  )
}

export default App;