import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../redux/authSlice';
import { Box, Heading, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginUser(formData))
      .then(() => {
        navigate('/contacts');
      })
      .catch((error) => {
        console.error('Login failed', error);
      });
  };

  return (
    <Box>
      <Heading as="h2" size="lg">
        Логін
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel htmlFor="email">Email:</FormLabel>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="password">Пароль:</FormLabel>
          <Input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </FormControl>
        <Button type="submit" colorScheme="blue">
          Увійти
        </Button>
      </form>
    </Box>
  );
};

export default LoginForm;
