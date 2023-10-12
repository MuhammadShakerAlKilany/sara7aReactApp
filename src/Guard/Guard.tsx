import React, { useContext } from 'react'
// import {context} from '../Context/context'
import { Navigate } from 'react-router-dom'
import {useSelector} from "react-redux"
import { Reducer } from '../interface/Reducer'

export default function Guard(props:any) {
  // let {isSignin}  = useContext(context)
 let isSignin =useSelector<Reducer>((state)=>{return state.isSignin.isSignin }) as boolean
if(isSignin){
    return props.children
}else{
    return <Navigate to="/signin" /> 
}  
}
