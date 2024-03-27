import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLaout from "../Layout/MainLaout";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLaout></MainLaout>,
      children: [
        {
            path: '/',
        }
      ]
    },
  ]);
  export default router;