import { Navigate, useRoutes } from "react-router-dom";

import Landing from "../pages/Landing";
import Blogs from "../pages/Blogs";
import Blog_inner_sec from "../components/Blog_inner_sec";

const Routes = () => {
  return useRoutes([
    { path: "/", element: <Landing /> },
    { path: "/blogs", element: <Blogs /> },
    { path: "/blog-inner/:id", element: <Blog_inner_sec /> },
    { path: "*", element: <Navigate to="/" replace /> },
  ]);
};

export default Routes;
