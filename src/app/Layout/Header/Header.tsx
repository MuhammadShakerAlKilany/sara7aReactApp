import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfinity } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { context } from "../../../Context/context";
export default function Header() {
  const { isSignin ,setIsSignin } = useContext(context);
  function logOut(){
    localStorage.removeItem("token")
    setIsSignin?.(false)
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary text-light  ">
        <div className="container-fluid  ">
          <Link className="navbar-brand m-0" to="">
            <FontAwesomeIcon icon={faInfinity} className="text-light h1 m-0" />
          </Link>
          <div className="d-flex ">
            {isSignin || (
              <>
                {" "}
                <span className="nav-item mx-2">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="signin"
                  >
                    Signin
                  </Link>
                </span>
                <span className="nav-item">
                  <Link className="nav-link" to="signup">
                    Signup
                  </Link>
                </span>
              </>
            )}
            {isSignin && (
              <>
                <span className="nav-item mx-2">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="profile"
                  >
                    profile
                  </Link>
                </span>
                <span className="nav-item">
                  <span className="nav-link  " style={{ cursor: "pointer" }} onClick={logOut}>
                    logout
                  </span>
                </span>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
