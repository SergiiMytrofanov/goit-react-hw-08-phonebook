import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './pages/PrivateRoute';
import UserMenu from './pages/UserMenu';
import RegistrationForm from './pages/RegistrationForm';
import LoginForm from './pages/LoginForm';
import { ChakraProvider } from '@chakra-ui/react';

const App = () => {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<UserMenu />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/contacts" element={<PrivateRoute />} />
      </Routes>
    </ChakraProvider>
  );
};

export default App;
