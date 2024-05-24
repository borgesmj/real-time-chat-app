import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ currentUser }) => {
  return currentUser ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;