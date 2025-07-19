import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Components/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AvailableFoods from "../Components/AvailableFoods";

import AddFood from "../Components/AddFood";
import FoodRequest from "../Components/FoodRequest";
import FoodDetails from "../Components/FoodDetails";
import MyFoodRequest from "../Components/MyFoodRequest";
import ManageMyFoods from "../Components/ManageMyFoods";


const Router = createBrowserRouter(


    [
        {path: "/",
            element: <App></App>,
            children: 

            [

                {

                    index: true,
                    path:"/",
                    Component: Home,


                },
                {
                    path: "/available-foods",
                    Component: AvailableFoods,

                },
                {
                    path: "/available-foods/:id",
                    Component: FoodDetails ,

                },
                {
                    path: "/auth/login",
                    Component: Login,

                },
                {
                    path: "/auth/Register",
                    Component: Register,

                },
                {
                    path: "/auth/add-food",
                    Component: AddFood,

                },
                {
                    path: "/auth/manage-foods",
                    Component: ManageMyFoods,

                },
                {
                    path: "/auth/my-food-requests",
                    Component: MyFoodRequest,

                }



            ]

        },


        {path: "/Home",
            element: <Home></Home>
        },

        

       


    ]



)
 export default Router;