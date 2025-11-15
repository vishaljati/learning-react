
import Card from "./Card.jsx"
import './App.css'

function App() {


  return (
    <>
     <h1 className='border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 '>Vishal Jati</h1>
     <Card fullName="Vishal Jati" job="Software Engineer"/>
     <Card fullName="Rahul Singh" job="System Engineer"/>
    </>
  )
}

export default App
