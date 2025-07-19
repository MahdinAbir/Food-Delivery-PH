import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Components/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AvailableFoods from "../Components/AvailableFoods";
import Managefood from "../Components/Managefood";
import AddFood from "../Components/AddFood";
import FoodRequest from "../Components/FoodRequest";
import FoodDetails from "../Components/FoodDetails";


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
                    Component: Managefood,

                },
                {
                    path: "/auth/my-food-requests",
                    Component: FoodRequest,

                }



            ]

        },


        {path: "/Home",
            element: <Home></Home>
        },

        

       


    ]



)
 export default Router;