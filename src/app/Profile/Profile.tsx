import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useQuery } from "react-query";
import { useAPIAuth } from "../../API";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Alert } from "react-bootstrap";
import { Massage } from "../../interface/Massage";
import { useSelector , useDispatch } from "react-redux";
import { Reducer } from "../../interface/Reducer";
import { getMassage } from "../../Redux/massages";
import store from "../../Redux/store";
type  AppDispatch = typeof store.dispatch
export default function Profile() {
  const dispatch = useDispatch<AppDispatch>()
  useEffect(()=>{
    dispatch(getMassage()) 
  },[])
  const token = localStorage.getItem("token")!;
  const apiAuth = useAPIAuth();
  const [isShowUrl, setIsShowUrl] = useState(false);
  const decoded: { id: string } = jwt_decode(token);
  
  // const { data ,isLoading } = useQuery("massage", () => apiAuth?.get("message"));
  const data = useSelector<Reducer>((state)=>{return state.massage.massagesArr})
  const isLoading = useSelector<Reducer>((state)=>{return state.massage.isLoading})
  console.log(data);
  function showUrl() {
    setIsShowUrl(!isShowUrl);
  }
  const allMessages  = data as []
  return (
    <>
      <
      >
        <Alert variant="secondary"className={`position-absolute     ${
          isShowUrl
            ? "d-block  "
            : "d-none"
        }   `}
        style={{ top: "-1vw" , left:"20%"}}>
          {"http://localhost:3000/send_mas/" + decoded.id}
        </Alert>
      </>
      <input type="button" value={isShowUrl?"Hiden Url":"share"} onClick={showUrl} className="btn btn-primary w-25 my-2 mx-auto d-block"/>
      <div>

      {isLoading?<div className="spinner-border text-primary" role="status">
  
</div>:allMessages.length!=0 ? allMessages.map((massage: Massage) => {
        return (
          <div key={massage._id} className="bg-secondary border border-primary w-50 text-center fs-3 mx-auto mb-1 ">
            {massage.messageContent}
          </div>
        );
      }):<div className="bg-secondary border border-primary w-50 text-center fs-3 mx-auto mb-1 " >Not fond Massage</div>}
      </div>
    </>
  );
}
