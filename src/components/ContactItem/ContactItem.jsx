import React from 'react';
import {
  Box,
  Text,
  Button,
  Flex,
} from '@chakra-ui/react';

const ContactItem = ({ contact, onDeleteContact }) => {
  const { id, name, number } = contact;

  return (
    <Box borderWidth="1px" borderRadius="lg" p={2} m={2}>
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontSize="lg">{name}:</Text>
        <Text fontSize="lg">{number}</Text>
        <Button colorScheme="red" size="sm" onClick={() => onDeleteContact(id)}>
          Видалити
        </Button>
      </Flex>
    </Box>
  );
};

export default ContactItem;
