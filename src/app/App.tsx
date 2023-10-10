import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import SignUp from "./SignUp/SignUp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import SignIn from "./SignIn/SignIn";
import Guard from "../Guard/Guard";
import Profile from "./Profile/Profile";
import Massage from "./Massage/Massage";
import NotFound from "./NotFound/NotFound";
const rout = createBrowserRouter([
  {
    path: "",
    Component: Layout,
    children: [
      { path: "signup", Component: SignUp },
      { path: "signin", Component: SignIn },
      {
        path: "profile",
        element: (
          <Guard>
            <Profile />
          </Guard>
        ),
      },{path:"send_mas/:userId",Component:Massage},{path:"*",Component:NotFound}
    ],
  },
]);
function App() {
  return <RouterProvider router={rout}></RouterProvider>;
}

export default App;
