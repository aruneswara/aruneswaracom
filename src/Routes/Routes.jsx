import { useRoutes } from "react-router-dom";

import Landing from "../pages/Landing";
import Blogs from "../pages/Blogs";
import Blog_inner_sec from "../components/Blog_inner_sec";
import Blog_add_form from "../components/Blog_add_form";

const Routes = () => {




  return useRoutes([

    { path: "", element: <Landing />, },
    { path: "/blogs", element: <Blogs />, },
    { path: "/blog-inner/:id", element: <Blog_inner_sec />, },
    { path: "/blog-add-form", element: <Blog_add_form />, },

  ]);
};

export default Routes;
