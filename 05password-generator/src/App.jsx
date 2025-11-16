import { useCallback, useState , useEffect, useRef } from 'react'
import './App.css'


function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed , setNumberAllowed]=useState(false)
  const [charAllowed , setCharAllowed]=useState(false)
  const [password , setPassword ]=useState("")

  const passwordGenerator = useCallback( ()=>{
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      let pass=""

      if (numberAllowed) str+="0123456789";
      if(charAllowed)str+="!#$%&'()*+-/;<=>?@\^_{|}~";

      for (let i = 0; i < length; i++) {
        let index = Math.floor((Math.random() * str.length) + 1 )
        pass+=str.charAt(index)
      }

         setPassword(pass)
   }, 
   [length , numberAllowed ,charAllowed , setPassword])


   useEffect(()=>{
      passwordGenerator()
   },
   [length,numberAllowed,charAllowed,passwordGenerator ])

   let passwordContext=useRef(null)

   const copyPasswordToClipboard= useCallback(
    ()=>{
      passwordContext.current?.select();

      window.navigator.clipboard.writeText(password)
      console.log(window);
      
    },[password])


  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
       <input 
          type="text" 
          value={password}
          placeholder='Password'
          className='outline-none w-full py-1 px-3 bg-white'
          readOnly
          ref={passwordContext}
          />

        <button 
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-400 text-white px-3 py-0.5 shrink-0'>
         copy</button>

      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}} 
            />

          <label>Length: {length}</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
           type="checkbox" 
           defaultChecked={numberAllowed}
           id='numberInput'
           onChange={()=>{
               setNumberAllowed((prev)=>!prev)
              }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>

      </div>
    </div>

    </>
  )
}

export default App
