import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    userData: null,
}

const authSlicer = createSlice({
    name: "auth",
    initialState,
    reducer: {
        login: (state,action)=>{
             state.isLoggedIn=true
             state.userData=action.payload.userData
        },
        logout: (state)=>{
             state.isLoggedIn=false
             state.userData=null
        }
    }
})

export const {login,logout}=authSlicer.actions

export default authSlicer.reducer