import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProtectRoute from "./provider/protectedRoute";
import Login from "./screens/Login";
import Tasks from "./screens/Tasks";

const Routes = () => {

  const authenticatedRoutes = [
    {
      path: "/",
      element: <ProtectRoute />,
      children: [
        {
          path: "/tarefas",
          element: <Tasks />
        }
      ]
    }
  ]

  const unAuthenticatedRoutes = [
    {
      path: "/login",
      element: <Login />
    },
  ]

  const router = createBrowserRouter([
    ...unAuthenticatedRoutes,
    ...authenticatedRoutes
  ])

  return <RouterProvider router={router} />

}

export default Routes;