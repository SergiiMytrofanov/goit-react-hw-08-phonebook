import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../redux/authSlice';
import { Link, Outlet } from 'react-router-dom';
import { Box, Button, Text } from '@chakra-ui/react';

const UserMenu = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <Box>
      {user ? (
        <Box>
          <Text>{user.email}</Text>
          <Button onClick={handleLogout} colorScheme="red">
            Вийти
          </Button>
        </Box>
      ) : (
        <Box>
          <Link to="/register">
            <Button colorScheme="blue" mr={2}>
              Реєстрація
            </Button>
          </Link>
          <Link to="/login">
            <Button colorScheme="teal">
              Логін
            </Button>
          </Link>
        </Box>
      )}
      {<Outlet />}
    </Box>
  );
};

export default UserMenu;
