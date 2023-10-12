import {configureStore} from "@reduxjs/toolkit"
import { isSigninReducer } from "./isSignin";
import { Reducer } from "../interface/Reducer";
import { massageReducer } from "./massages";

let store = configureStore<Reducer>({
    reducer:{
        isSignin:isSigninReducer,
        massage:massageReducer
    }
})
export default store ;