import React from 'react'
import {logout} from "../../features/authSlicer"
import authService from "../../appwrite/auth"
import {useDispatch} from 'react-redux'

function LogoutBtn() {
     const dispatch=useDispatch()

     const logoutHandler=()=>{
          authService.logOut()
           .then(()=>dispatch(logout()) )
           .catch((err)=>console.log(err))  
     }

  return (
    <button 
    onClick={logoutHandler}
    className='inline-bock px-6 py-2
     duration-200 hover:bg-blue-100 rounded-full'>
     Logout </button>
  )
}

export default LogoutBtn