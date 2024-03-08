import React from 'react';
import { Route, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Assuming you have an AuthContext for managing authentication

const PrivateRoute = ({ element, ...props }) => {
  const { isAuthenticated } = useAuth(); // Adjust accordingly based on your AuthContext
  const navigate = useNavigate();

  return isAuthenticated ? (
    <Route {...props} element={element} />
  ) : (
    navigate("/login")
  );
};

export default PrivateRoute;
