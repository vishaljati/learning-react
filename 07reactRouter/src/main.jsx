import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Layout from './Layout.jsx'
import {
    Home, 
    About,
    ContactUs,
    User,
    Github } from "./components"

import {GithubLoader} from "./components/Github/Github.jsx"


// const router =createBrowserRouter([
//     {
//       path:'/',
//       element:<Layout/>,
//       children:[
//         {
//           path:"",
//           element:<Home/>
//         },
//         {
//           path:"about",
//           element:<About/>
//         },
//         {
//           path:"contact",
//           element:<ContactUs />
//         }
//       ]
//     }
// ])

const router = createBrowserRouter(
   createRoutesFromElements(
     <Route path="/" element={<Layout/>} >
         <Route path='' element={<Home />} />
         <Route path='about' element={<About/>} />
         <Route path='contact' element={<ContactUs/>} />
         <Route path='users/:userid' element={<User/>}/>
         <Route
          loader={GithubLoader}
          path='github'
          element={<Github/>} />
          
    </Route>
   )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
