import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import { Circles } from  'react-loader-spinner'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const PrivateRoute = ({ children }) => {

    const { user, isLoading } = useContext(AuthContext)

    const location = useLocation();

    if (isLoading) {
        return <Circles
        height="80"
        width="80"
        color="rgb(5 150 105)"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    }


    if (user) {
        return children
    } else {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
};

export default PrivateRoute;