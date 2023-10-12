import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    isSignin:localStorage.getItem("token") != undefined
}
let isSigninSlice =createSlice({
    name:"isSignin",
    initialState,
    reducers:{
        signin(state){
            state.isSignin= true
        },
        logOut(state){
            state.isSignin=false
            localStorage.removeItem("token")
           
        }
}
    
})
export const isSigninReducer = isSigninSlice.reducer
export const {logOut,signin} = isSigninSlice.actions