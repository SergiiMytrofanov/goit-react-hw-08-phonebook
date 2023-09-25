
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './pages/PrivateRoute';
import UserMenu from './pages/UserMenu';
import RegistrationForm from './pages/RegistrationForm';
import LoginForm from './pages/LoginForm';

const App = () => {
  return (
    <Routes>
      <Route path="/goit-react-hw-08-phonebook/" element={<UserMenu />} />
      <Route path="/goit-react-hw-08-phonebook/register" element={<RegistrationForm />} />
      <Route path="/goit-react-hw-08-phonebook/login" element={<LoginForm />} />
      <Route path="/goit-react-hw-08-phonebook/contacts" element={<PrivateRoute />} />
    </Routes>
  );
};

export default App;
