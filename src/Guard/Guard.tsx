import React, { useContext } from 'react'
import {context} from '../Context/context'
import { Navigate } from 'react-router-dom'

export default function Guard(props:any) {
  let {isSignin}  = useContext(context)
if(isSignin){
    return props.children
}else{
    return <Navigate to="/signin" /> 
}  
}
