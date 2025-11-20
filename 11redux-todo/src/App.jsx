import './App.css'
import TodoForm from "./components/TodoForm"
import TodoItem from "./components/TodoItem"

function App() {
  
  return (
    <>
    <div >
      <h1 className='text-5xl'>Learn about redux toolkit</h1>
      <TodoForm/>
       <br />
      <TodoItem/>
    </div>

    </>
  )
}

export default App