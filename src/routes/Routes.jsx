import { createBrowserRouter } from "react-router-dom";
import MainTemplate from "../pages/MainTemplate";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import HomeMain from "../components/HomeMain";
import AllProducts from "../components/AllProducts";
import Laptops from "../components/Laptops";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainTemplate></MainTemplate>,
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
                     loader: ()=> fetch('../../public/data.json')
                    },
                    {
                        path: `/products/Laptops`,
                        element: <Laptops></Laptops>,
                        loader: ()=> fetch('../../public/data.json')
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
                element: <Dashboard></Dashboard>
            }
        ]
    },
]);

export { router }