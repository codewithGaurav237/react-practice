import { useState } from 'react'
import { useRef } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const timerRef = useRef();

  const onstartclick = () => {
    timerRef.current = setInterval(() => {
      setCount (count => count + 1);
    }, 100)
  }

  const onstopclick = () => {
    clearInterval(timerRef.current)
  }

  return (
    <>
      <p>count- {count}</p>
      <button onClick={onstartclick}>Start</button>
      <button onClick={onstopclick}>Stop</button>     
    </>
  )
}

export default App
