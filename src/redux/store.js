import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userRedux";


export default configureStore({
    reducer:{
        user:userReducer,
    }
})