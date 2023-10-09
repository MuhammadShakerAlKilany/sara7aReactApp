import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import SignUp from "./SignUp/SignUp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import SignIn from "./SignIn/SignIn";
const rout = createBrowserRouter([
  {
    path: "",
    Component: Layout,
    children: [{ path: "signup", Component: SignUp },
  {path:"signin",Component:SignIn}],
  },
]);
function App() {
  return <RouterProvider router={rout}></RouterProvider>;
}

export default App;
