import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import {
  Box,
  Input,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector((state) => state.contacts.contacts);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim() === '' || number.trim() === '') return;

    const newContact = {
      id: nanoid(),
      name: name.trim(),
      number: number.trim(),
    };

    addContact(newContact);
    setName('');
    setNumber('');

    const updatedContacts = [...contacts, newContact];
    saveContactsToLocalStorage(updatedContacts);
  };

  const saveContactsToLocalStorage = (contacts) => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  };

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <FormControl id="name" isRequired>
        <FormLabel>Ім'я та Прізвище</FormLabel>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-ЯёЁіІїЇєЄ]+(([' \-][a-zA-Zа-яА-ЯёЁіІїЇєЄ ])?[a-zA-Zа-яА-ЯёЁіІїЇєЄ]*)*$"
          title="Ім'я може містити лише літери, апостроф, тире та пробіли. Наприклад, Адріан, Джейкоб Мерсер, Шарль де Батц де Кастельмор д'Артаньян"
          value={name}
          onChange={handleNameChange}
        />
        <FormErrorMessage>Це поле обов'язкове</FormErrorMessage>
      </FormControl>

      <FormControl id="number" isRequired>
        <FormLabel>Номер телефону</FormLabel>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Номер телефону повинен складатися з цифр і може містити пробіли, тире, круглі дужки та починатися з +"
          value={number}
          onChange={handleNumberChange}
        />
        <FormErrorMessage>Це поле обов'язкове</FormErrorMessage>
      </FormControl>

      <Button type="submit" mt={4} colorScheme="teal">
        Додати контакт
      </Button>
    </Box>
  );
};

export default ContactForm;
