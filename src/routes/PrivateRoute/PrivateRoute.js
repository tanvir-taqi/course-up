import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import { Bars } from  'react-loader-spinner'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const PrivateRoute = ({ children }) => {

    const { user, isLoading } = useContext(AuthContext)

    const location = useLocation();

    if (isLoading) {
        return <Bars
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="bars-loading"
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