import {createBrowserRouter } from "react-router-dom";
import Create from '../pages/Create.js';
import Notes from '../pages/Notes.js';
import Layout from "../Compenents/layout.js";
const router = createBrowserRouter([
    {
        path: "/",
        element:<Layout />,
        children:[
          {
            path: "create",
            element: <Create />,
          },
          {
            path: "listes",
            element: <Notes />,
          },
        ],
      }
])
export default router;