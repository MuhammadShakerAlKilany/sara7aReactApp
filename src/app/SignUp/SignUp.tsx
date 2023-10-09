import { useFormik } from "formik";
import * as Yup from "yup";

export default function SignUp() {
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
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit} >
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
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
          {formik.errors.email && (
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
          />

          {formik.errors.name && (
            <div className="text-danger">{formik.errors.name}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="inputAge" className="form-label">
            Age
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAge"
            aria-describedby="Age"
            value={formik.values.age}
            onChange={formik.handleChange}
          />

          {formik.errors.age && (
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
          />
          {formik.errors.password && (
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
          />
          {formik.errors.rePassword && (
            <div className="text-danger">{formik.errors.rePassword}</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
