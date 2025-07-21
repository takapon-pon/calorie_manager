// src/frontend/src/components/PrivateRoute.tsx
import React, { JSX } from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const accessToken = localStorage.getItem('access_token');
  return accessToken ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
