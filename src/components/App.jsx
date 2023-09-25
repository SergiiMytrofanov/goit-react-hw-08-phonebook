
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './pages/PrivateRoute';
import UserMenu from './pages/UserMenu';
import RegistrationForm from './pages/RegistrationForm';
import LoginForm from './pages/LoginForm';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<UserMenu />} />
      <Route path="/register" element={<RegistrationForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/contacts" element={<PrivateRoute />} />
    </Routes>
  );
};

export default App;
