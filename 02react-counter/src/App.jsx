import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  const addValue = ()=>{
     setCounter(counter+1)
  }
  const removeValue = ()=>{
    if (counter===0) {
      setCounter(counter=0)
    }
    else{
        setCounter(counter-1)
    }
    
  }

  return (
    <>
      <h1>Hii! This is a simple counter</h1>
      <h2>Counter Value : {counter}</h2>
      <br />
      <br />
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
      <br />
      <br />
      <p>Special Thanks to Hitesh Sir | Chai aur Code</p>

    </>
  )
}

export default App
