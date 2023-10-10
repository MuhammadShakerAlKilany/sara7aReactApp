import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useAPI } from "../../API";
import { useState } from "react";

export default function SignUp() {
  const navigate = useNavigate();
  const [isTeach, setIsTeach] = useState<any>({});

  const api = useAPI();
  const initialValues = {
    name: "",
    email: "",
    password: "",
    rePassword: "",
    age: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(5, "min is 5")
      .max(20, "max is 20")
      .required("name is required"),
    email: Yup.string()
      .email("email not acceptable")
      .required("email is required"),
    password: Yup.string()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Minimum eight characters, at least one letter, one number and one special character"
      )
      .required("password is required"),
    rePassword: Yup.string()
      .oneOf([Yup.ref("password")], "rePassword must match Password")
      .required("rePassword is required"),
    age: Yup.number()
      .min(13, "min age is 13")
      .max(100, "max age is 100")
      .required("age is required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {
        console.log(values);
        await api.post("user", values);
        navigate("/signin");
      } catch (err) {
        console.log(err);
      }
    },
  });
  return (
    <>
      <section className=" w-50 my-auto  d-block mx-auto mt-5 mb-1 ">
        <form
          onSubmit={(e) => {
            formik.handleSubmit(e);
            setIsTeach({
              email: true,
              name: true,
              age: true,
              password: true,
              rePassword: true,
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
            <label htmlFor="inputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              aria-describedby="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              name="name"
              onBlur={() => {
                setIsTeach({ ...isTeach, name: true });
              }}
            />

            {formik.errors.name && isTeach.name && (
              <div className="text-danger">{formik.errors.name}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="inputAge" className="form-label">
              Age
            </label>
            <input
              type="number"
              className="form-control"
              id="inputAge"
              aria-describedby="Age"
              value={formik.values.age}
              onChange={formik.handleChange}
              name="age"
              onBlur={() => {
                setIsTeach({ ...isTeach, age: true });
              }}
            />

            {formik.errors.age && isTeach.age && (
              <div className="text-danger">{formik.errors.age}</div>
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
          <div className="mb-3">
            <label htmlFor="InputrePassword" className="form-label">
              rePassword
            </label>
            <input
              type="password"
              className="form-control"
              id="InputrePassword"
              value={formik.values.rePassword}
              onChange={formik.handleChange}
              name="rePassword"
              onBlur={() => {
                setIsTeach({ ...isTeach, rePassword: true });
              }}
            />
            {formik.errors.rePassword && isTeach.rePassword && (
              <div className="text-danger">{formik.errors.rePassword}</div>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-secondary border   border-primary  d-block w-50 mb-2 mx-auto "
          >
            Submit
          </button>
          <button
            type="button"
            className="btn btn-secondary  border  border-primary d-block w-25 mx-auto"
            onClick={() => {
              navigate("/signin");
            }}
          >
            SignIn
          </button>
        </form>
      </section>
    </>
  );
}
