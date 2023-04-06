import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Layout from "../components/Layout/Layout";

 const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:'/',
          element:<Home/>
        }
      ]
    },
  ]);

  export default router