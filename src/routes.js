import { createBrowserRouter } from "react-router-dom";

import App from "./app";
import Users from "./pages/Users.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: App(),
    },
    {
        path: "/users",
        element: Users(),
    }
])