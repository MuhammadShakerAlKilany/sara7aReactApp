import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useAPIAuth } from "../../API";
import { useFormik } from "formik";
import * as Yup from "yup"
export default function Massage() {
  const { userId } = useParams();
  const apiAuth = useAPIAuth();
  let [isLoading, setIsLoading] = useState(false);
  const initialValues = {
    messageContent: "",
    receivedId: userId,
  };
  const formik = useFormik({
    initialValues,
    onSubmit: async (value) => {
        setIsLoading(true)
      console.log(await apiAuth?.post("message", value));
      formik.values.messageContent = "";
      setIsLoading(false)
    },validationSchema:Yup.object({
        messageContent: Yup.string().min(5,"min is 5 chr").required("is required")
    }) 
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="d-flex flex-column ">
        <div className="d-flex ">

       <div style={{width:"2rem"}}>{isLoading && (
          <span className="spinner-border text-primary" role="status"></span>
        )}</div> 
        <input
          type="text"
          className="w-75 mx-auto mt-2 "
          value={formik.values.messageContent}
          name="messageContent"
          onChange={formik.handleChange}
        
        />
        </div>
        <div style={{height:"2rem"}} className="mb-1">{formik.errors.messageContent &&<div className="text-danger text-center h3  "  >{formik.errors.messageContent}</div>}</div> 
        <input type="submit" value="send" className="btn btn-primary w-50 m-auto " />
      </form>
    </>
  );
}
