import React from "react";
import { useParams } from "react-router-dom";
import { useAPIAuth } from "../../API";
import { useFormik } from "formik";

export default function Massage() {
  const { userId } = useParams();
  const apiAuth = useAPIAuth();
  const initialValues = {
    messageContent: "",
    receivedId: userId,
  };
  const formik = useFormik({ initialValues , onSubmit:async (value)=>{
    console.log(value)
   console.log(await apiAuth?.post("message",value)) 
  } });

  return( <>
  <form onSubmit={formik.handleSubmit}>
    <input type="text" className="w-100 h-100 " value={formik.values.messageContent} name="messageContent" onChange={formik.handleChange} />
    <input type="submit" value="send" />
  </form>
  </>);
}
