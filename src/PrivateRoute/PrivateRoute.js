import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { firebaseAuths } = useAuth();
    const { user, isLoading } = firebaseAuths;
    const location = useLocation();

    if (isLoading) {
        return (
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        )
    }

    return (
        user?.displayName ? children : <Navigate to='/login' state={{ from: location }}></Navigate >
    );
};

export default PrivateRoute;