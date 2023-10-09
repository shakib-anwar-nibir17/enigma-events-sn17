import { createBrowserRouter } from "react-router-dom";
import Root from "../../MainLayout/Root";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import ServiceDetail from "../../Pages/Services/ServiceDetail";
import PrivateRoute from "../Private/PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/service/:id",
        element: (
          <PrivateRoute>
            <ServiceDetail></ServiceDetail>
          </PrivateRoute>
        ),
        loader: () => fetch("/data.json"),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default routes;
