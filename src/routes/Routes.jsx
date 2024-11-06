import { createBrowserRouter } from "react-router-dom";
import MainTemplate from "../pages/MainTemplate";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import HomeMain from "../components/HomeMain";
import AllProducts from "../components/AllProducts";
import Laptops from "../components/Laptops";
import Phones from "../components/Phones";
import Watches from "../components/Watches";
import Chargers from "../components/Chargers";
import PowerBanks from "../components/PowerBanks";
import Details from "../pages/Details";

import WishList from "../components/WishList";
import Cart from "../components/Cart";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainTemplate></MainTemplate>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                children: [{
                    path: '/',
                    element: <HomeMain></HomeMain>,
                    children: [
                        {
                            path: '/',
                            element: <AllProducts></AllProducts>,
                            loader: () => fetch('/data.json')
                        },
                        {
                            path: `/products/Laptops`,
                            element: <Laptops></Laptops>,
                            loader: () => fetch('/data.json')
                        },
                        {
                            path: `/products/Phones`,
                            element: <Phones></Phones>,
                            loader: () => fetch('/data.json')
                        },
                        {
                            path: `/products/Smart Watches`,
                            element: <Watches></Watches>,
                            loader: () => fetch('/data.json')
                        },
                        {
                            path: `/products/Chargers`,
                            element: <Chargers></Chargers>,
                            loader: () => fetch('/data.json')
                        },
                        {
                            path: `/products/Power Banks`,
                            element: <PowerBanks></PowerBanks>,
                            loader: () => fetch('/data.json')
                        }
                    ]
                }

                ]
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>,
                children: [
                    {
                        path: '/dashboard/',
                        element: <Cart></Cart>
                    },
                    {
                        path: '/dashboard/wishlist',
                        element: <WishList></WishList>
                    }
                ]
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: `/details/:productId`,
                element: <Details></Details>,
                loader: ()=> fetch('/data.json')
            }
        ]
    },
]);

export { router }