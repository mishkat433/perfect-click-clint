import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import Details from "../../pages/Details/Details";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import ServicePage from "../../pages/Servicepage/ServicePage";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/services",
                loader: async () => fetch(`http://localhost:5200/services`),
                element: <ServicePage />
            },
            {
                path: "/services/details/:id",
                loader: ({ params }) => fetch(`http://localhost:5200/singleService/${params.id}`),
                element: <Details />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
        ]
    }
])

export default routes;