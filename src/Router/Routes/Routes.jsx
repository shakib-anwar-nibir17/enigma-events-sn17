import { createBrowserRouter } from "react-router-dom";
import Root from "../../MainLayout/Root";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("data.json"),
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);

export default routes;
