import React, { useState } from "react";
import jwt_decode from "jwt-decode";

export default function Profile() {
  const token = localStorage.getItem("token")!;
    const [isShowUrl , setIsShowUrl] = useState(false)
  const decoded:{id:string} = jwt_decode(token);
 function showUrl(){
    setIsShowUrl(!isShowUrl)
 }
  return( <>
  <div className={`position-absolute w-50 h-25 bg-secondary border border-primary   ${isShowUrl?"d-flex justify-content-center align-items-center ":"d-none"}   `} style={{top:"15vw",left:"30vh"}} ><span className="mx-auto  d-block ">{"http://localhost:3000/send_mas/"+decoded.id}</span></div>
        <input type="button" value="share" onClick={showUrl}/>
  </>);
}
