import {configureStore} from "@reduxjs/toolkit"
import { isSigninReducer } from "./isSignin";
import { Reducer } from "../interface/Reducer";

let store = configureStore<Reducer>({
    reducer:{
        isSignin:isSigninReducer,

    }
})
export default store ;