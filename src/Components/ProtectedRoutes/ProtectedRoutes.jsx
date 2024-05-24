import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ currentUser }) => {
    console.log(currentUser === false)
  return currentUser ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;