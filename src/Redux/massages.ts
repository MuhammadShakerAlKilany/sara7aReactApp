import {createAsyncThunk , createSlice} from "@reduxjs/toolkit"
import { useAPIAuth } from "../API"
import { Massage } from "../interface/Massage"
import { Res } from "../interface/Respons"
import axios from "axios"

export const getMassage = createAsyncThunk("massage/getMassage", async function getMassage() {
  let  token: string | null = localStorage.getItem("token")
  const URL = "https://sara7aiti.onrender.com/api/v1";
  const apiAuth = axios.create({
    baseURL: URL,
    headers: { token: `${token}` },
  })
  try {
    
      const res = await apiAuth.get<Res>("message")
      console.log("message",res)
      return res?.data
  } catch (error) {
    console.log(error)
  }
})

const initialState:{massagesArr:Massage[],isLoading:boolean} = {
 massagesArr:[],
 isLoading:true
}
const massageSlice =  createSlice({
    name:"massage",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(getMassage.fulfilled,(state,action)=>{
            console.log("payload",action.payload)
            state.massagesArr = action.payload?.allMessages!
            state.isLoading = false
        })
    }
    

}) 

export const massageReducer = massageSlice.reducer
