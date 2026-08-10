import { Navigate, useRoutes } from "react-router-dom";

import Landing from "../pages/Landing";

const Routes = () => {
  return useRoutes([
    { path: "/", element: <Landing /> },
    { path: "*", element: <Navigate to="/" replace /> },
  ]);
};

export default Routes;
