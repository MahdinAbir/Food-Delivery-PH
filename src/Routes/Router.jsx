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
import PrivateRoute from "./PrivateRoute";
import TermsAndConditions from "../Components/TermsAndConditions";
import PrivacyPolicy from "../Components/PrivacyPolicy";


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
                    path: "/terms",
                    Component: TermsAndConditions,

                },
                {
                    path: "/privacy",
                    Component: PrivacyPolicy,

                },
                {
                    path: "/available-foods/:id",
                    element: <PrivateRoute>  <FoodDetails></FoodDetails>  </PrivateRoute>

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
                     element: <PrivateRoute>  <AddFood></AddFood> </PrivateRoute>

                },
                {
                    path: "/auth/manage-foods",
                     element: <PrivateRoute>  <ManageMyFoods></ManageMyFoods>  </PrivateRoute>

                },
                {
                    path: "/auth/my-food-requests",
                     element: <PrivateRoute> <MyFoodRequest></MyFoodRequest>  </PrivateRoute>

                }



            ]

        },


        {path: "/Home",
            element: <Home></Home>
        },

        

       


    ]



)
 export default Router;