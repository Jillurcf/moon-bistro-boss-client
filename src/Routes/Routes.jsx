import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLaout from "../Layout/MainLaout";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLaout></MainLaout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'menu',
          element: <Menu></Menu>
        }
      ]
    },
  ]);
  export default router;