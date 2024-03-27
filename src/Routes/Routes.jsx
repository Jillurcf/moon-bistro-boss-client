import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLaout from "../Layout/MainLaout";
import Home from "../Pages/Home/Home/Home";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLaout></MainLaout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }
      ]
    },
  ]);
  export default router;