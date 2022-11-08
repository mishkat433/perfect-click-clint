import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import AddServices from "../../pages/AddServices/AddServices";
import Details from "../../pages/Details/Details";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import MyReviews from "../../pages/MyReviews/MyReviews";
import Register from "../../pages/Register/Register";
import ServicePage from "../../pages/Servicepage/ServicePage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


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
                loader: async () => fetch(`https://perfect-click-server.vercel.app/services`),
                element: <ServicePage />
            },
            {
                path: "/services/details/:id",
                loader: ({ params }) => fetch(`https://perfect-click-server.vercel.app/singleService/${params.id}`),
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
            {
                path: "/myReviews",
                element: <PrivateRoute><MyReviews /></PrivateRoute>
            },
            {
                path: "/addService",
                element: <AddServices />
            },
        ]
    }
])

export default routes;