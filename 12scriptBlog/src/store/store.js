import {configureStore} from "@reduxjs/toolkit"
import authReducer from "../features/authSlicer.js"

const store = configureStore({
    reducer:{
       authReducer
    }
})

export default store;