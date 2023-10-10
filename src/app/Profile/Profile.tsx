import React, { useState } from "react";
import jwt_decode from "jwt-decode";
import { useQuery } from "react-query";
import { useAPIAuth } from "../../API";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Profile() {
  const token = localStorage.getItem("token")!;
  const apiAuth = useAPIAuth();
  const [isShowUrl, setIsShowUrl] = useState(false);
  const decoded: { id: string } = jwt_decode(token);
  
  const { data ,isLoading } = useQuery("massage", () => apiAuth?.get("message"));
  console.log(data);
  function showUrl() {
    setIsShowUrl(!isShowUrl);
  }
  return (
    <>
      <div
        className={`position-absolute w-50 h-25 bg-secondary border border-primary   ${
          isShowUrl
            ? "d-flex justify-content-center align-items-center "
            : "d-none"
        }   `}
        style={{ top: "15vw", left: "30vh" }}
      >
        <span className="mx-auto  d-block ">
          {"http://localhost:3000/send_mas/" + decoded.id}
        </span>
      </div>
      <input type="button" value="share" onClick={showUrl} />
      <div>

      {isLoading?<div className="spinner-border text-primary" role="status">
  
</div>:data?.data.allMessages.map((massage: {_id:string ,messageContent: string }) => {
        return (
          <div key={massage._id} className="bg-secondary border border-primary w-50 text-center fs-3 mx-auto mb-1 ">
            {massage.messageContent}
          </div>
        );
      })}
      </div>
    </>
  );
}
