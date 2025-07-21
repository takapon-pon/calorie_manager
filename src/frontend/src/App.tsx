import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MealPage from './pages/MealPage';

const App: React.FC = () => {
  const isAuthenticated = !!localStorage.getItem('access');

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/meals" element={isAuthenticated ? <MealPage /> : <Navigate to="/login" />} />
      <Route path="*" element={<Navigate to="/meals" />} />
    </Routes>
  );
};

export default App;