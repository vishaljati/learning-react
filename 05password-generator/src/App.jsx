import { useCallback, useState } from 'react'


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

      for (let i = 1; i < length; i++) {
        let index = Math.floor((Math.random() * str.length) + 1 )
        pass=str.charAt(index)
      }
   }, 
   
   [length , numberAllowed ,charAllowed , setPassword])


  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md 
     rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center my-3'>
        Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden
      mb-4'>
       <input 
          type="text" 
          value={password}
          placeholder='Password'
          className='outline-none w-full py-1 px-3'
          readOnly/>
      </div>
      
    </div>

    </>
  )
}

export default App
