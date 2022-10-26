import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const PrivateRoute = ({ children }) => {

    const { user, isLoading } = useContext(AuthContext)

    const location = useLocation();

    if (isLoading) {
        return <h1>loading</h1>
    }


    if (user) {
        return children
    } else {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
};

export default PrivateRoute;