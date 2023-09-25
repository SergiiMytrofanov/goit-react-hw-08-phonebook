import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../redux/authSlice';
import { Box, Button, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';

const RegistrationForm = () => {
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

    dispatch(registerUser(formData))
      .then(() => {
        navigate('/login');
      })
      .catch((error) => {
        console.error('Registration failed', error);
      });
  };

  return (
    <Box>
      <Text fontSize="xl" fontWeight="bold">Реєстрація</Text>
      <form onSubmit={handleSubmit}>
        <FormControl mt={4}>
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
        <FormControl mt={4}>
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
        <Button mt={4} type="submit" colorScheme="blue">Зареєструватися</Button>
      </form>
    </Box>
  );
};

export default RegistrationForm;
