import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ContactManager from './ContactManager';
import { useNavigate } from 'react-router-dom';
import { Box, Text } from '@chakra-ui/react';

const PrivateRoute = () => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/goit-react-hw-08-phonebook/login');
    }
  }, [user, navigate]);

  return (
    <Box>
      {!user ? (
        <Text fontSize="lg">Будь ласка, увійдіть, щоб переглядати контакти.</Text>
      ) : (
        <ContactManager />
      )}
    </Box>
  );
};

export default PrivateRoute;
