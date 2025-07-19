import React, { use } from 'react';

import { Navigate, useLocation } from 'react-router';



import Loader from '../Components/Loader';
import { AuthContext } from '../Authentication/AuthContext';

const PrivateRoute = ( {children}  ) => {
    const location = useLocation();
   

    const {user, loading } =use(AuthContext);
    
    if(loading){
        return <Loader></Loader>
    }

    if( user  ){
        return children

    }
    

      return  <Navigate to={"/auth/login"} state={{ from: location }} ></Navigate>
      

    


    


    


};

export default PrivateRoute;