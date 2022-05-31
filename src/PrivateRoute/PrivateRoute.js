import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { firebaseAuths } = useAuth();
    const { user } = firebaseAuths;
    const location = useLocation();
    console.log(user);
    return (
        user?.displayName ? children : <Navigate to='/login' state={{ from: location }}></Navigate >
    );
};

export default PrivateRoute;