import { createBrowserRouter } from "react-router-dom";

import Login from "./pages/Login";
import Users from "./pages/Users";
import Areas from "./pages/Areas";

export const router = createBrowserRouter([
    {
        path: "/",
        element: Login(),
    },
    {
        path: "/users",
        element: Users(),
    },
    {
        path: "/areas",
        element: Areas(),
    }
])