import { createBrowserRouter } from "react-router-dom";

import NotFoundPage from "../modules/not-found/NotFoundPage";
import App from "../App";
import Signup from "../modules/signin-signup/SignUp";
import SignIn from "../modules/signin-signup/SignIn";
import { routeGenerator } from "../utils/routesGenerator";
import { customersRoutes } from "./customersRoutes";
import { adminRoutes } from "./adminRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routeGenerator(adminRoutes),
  },

  // {
  //   path: "/user/dashboard",
  //   element: (
  //     <ProtectedRoute role="user">
  //       <Dashboard />
  //     </ProtectedRoute>
  //   ),
  //   children: routeGenerator(userDashboardPaths),
  // },

  {
    path: "/sign-up",
    element: <Signup />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
