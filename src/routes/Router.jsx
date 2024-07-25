import { createBrowserRouter, } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import ProductByCategory from "../pages/ProductByCategory";
import DealsProducts from "../pages/DealsProducts";
import ProductsUnderFifty from "../pages/ProductsUnderFifty";
import Shop from "../pages/Shop";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ForgetPassword from "../pages/ForgetPassword";
import Help from "../pages/Help";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/shop',
                element: <Shop />
            },          
            {
                path: "/product/:id",
                element: <ProductDetails />
            },
            {
                path: "/category/:category",
                element: <ProductByCategory />
            },
            {
                path: "/products/deals",
                element: <DealsProducts />
            },
            {
                path: "/products/under-fifty",
                element: <ProductsUnderFifty />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signup",
                element: <SignUp />
            },
            {
                path: "/forget-password",
                element: <ForgetPassword />
            },
            {
                path: "/help",
                element: <Help />
            }
            
        ]
    },
]);

export default router