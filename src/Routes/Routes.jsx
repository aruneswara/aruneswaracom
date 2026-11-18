import { Navigate, useRoutes } from "react-router-dom";

import Landing from "../pages/Landing";
import Blogs from "../pages/Blogs";
import Blog_inner_sec from "../components/Blog_inner_sec";
import LivingBiography from "../pages/LivingBiography";

const Routes = () => {
  return useRoutes([
    { path: "/", element: <Landing /> },
    { path: "/blogs", element: <Blogs /> },
    { path: "/blog-inner/:id", element: <Blog_inner_sec /> },
    { path: "/living-biography", element: <LivingBiography /> },
    { path: "*", element: <Navigate to="/" replace /> },
  ]);
};

export default Routes;
