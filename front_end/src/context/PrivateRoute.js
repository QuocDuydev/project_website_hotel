import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ element, ...rest }) => {
    const { isLoggedIn, user } = useAuth();

    if (!isLoggedIn || (user && user.account_type !== 'admin' && user.account_type !== 'superadmin')) {
        return <Navigate to="/login" />;
    }

    return <Route {...rest} element={element} />;
};

export default PrivateRoute;