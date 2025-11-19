import { ThemeProvider ,ThemeContext } from "./contexts/Theme"
import './App.css'
import { useEffect, useState } from "react";
import {ThemeButton ,Card } from "./components"

function App() {
  // console.log(ThemeContext);

  const [themeMode , setTheme] = useState("light")

  const  darkTheme= ()=>{
       setTheme("dark")
  }
  
  const  lightTheme= ()=>{
       setTheme("light")
  }
  
// actual change in theme
useEffect(()=>{
    const HTML = document.querySelector('html')
    HTML.classList.remove("dark","light")
    HTML.classList.add(themeMode)
},[themeMode])

  return (
  <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
    </div>
  </ThemeProvider>
  )
}

export default App
