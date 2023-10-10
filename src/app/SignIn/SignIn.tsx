import { useFormik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useAPI } from "../../API";
import { useContext, useState } from "react";
import { context } from "../../Context/context";
export default function SignIn() {
  const navigate = useNavigate();
  const api = useAPI();
 const{setIsSignin} = useContext(context)
  const [isTeach, setIsTeach] = useState<any>({});
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("email not acceptable")
      .required("email is required"),
    password: Yup.string()
      .min(3, "min password is 3")
      .max(50, "min password is 3")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        "Minimum eight characters, at least one letter and one number"
      )
      .required("password is required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {
        const res = await api.post("user/signin", values);
        localStorage.setItem("token", res.data.token);
        setIsSignin?.(true)
        navigate("/profile")
      } catch (error) {
        console.log(error)
      }
    },
  });
  return (
    <>
      <section className=" w-50 my-auto  d-block mx-auto mt-5 mb-1 ">
        <FontAwesomeIcon
          icon={faUserSecret}
          className="opacity-25 d-block mx-auto display-1  "
        />
        <div className="text-center fs-2">SignIn</div>

        <form
          onSubmit={(e) => {
            formik.handleSubmit(e);
            setIsTeach({
              email: true,
              password: true,
            });
          }}
          className=" p-5 bg-light"
        >
          <div className="mb-3">
            <label htmlFor="InputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="InputEmail1"
              aria-describedby="emailHelp"
              value={formik.values.email}
              onChange={formik.handleChange}
              name="email"
              onBlur={() => {
                setIsTeach({ ...isTeach, email: true });
              }}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
            {formik.errors.email && isTeach.email && (
              <div className="text-danger">{formik.errors.email}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="InputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="InputPassword1"
              value={formik.values.password}
              onChange={formik.handleChange}
              name="password"
              onBlur={() => {
                setIsTeach({ ...isTeach, password: true });
              }}
            />
            {formik.errors.password && isTeach.password && (
              <div className="text-danger">{formik.errors.password}</div>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-secondary  border  border-primary mx-auto d-block w-50 mb-2"
          >
            Submit
          </button>
          <input
            type="button"
            className="btn btn-secondary  border  border-primary mx-auto d-block w-25"
            value="SignUp"
            onClick={() => {
              navigate("/signup");
            }}
          />
        </form>
      </section>
    </>
  );
}
