
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import {
  fetchContacts,
  addContact,
  deleteContact,
  setFilter,
  toggleSearchByPhone,
} from '../redux/contactSlice';

import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../FilterItem/FilterItem';

const ContactManager = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);
  const searchByPhone = useSelector((state) => state.contacts.searchByPhone);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = (newContact) => {
    const existingName = contacts.find(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    const existingNumber = contacts.find(
      (contact) => contact.number === newContact.number
    );

    if (existingName) {
      alert(`Контакт з ім'ям ${newContact.name} вже присутній у телефонній книзі.`);
      return;
    }

    if (existingNumber) {
      alert(`Контакт з номером телефону ${newContact.number} вже присутній у телефонній книзі.`);
      return;
    }

    dispatch(addContact({ ...newContact, id: nanoid() }));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  const handleToggleSearchByPhone = () => {
    dispatch(toggleSearchByPhone());
  };

  const filteredContacts = contacts.filter((contact) =>
    searchByPhone
      ? contact.number.includes(filter)
      : contact.name.toLowerCase().includes(filter.toLowerCase())
  );


  return (
    <div>
      <ContactForm addContact={handleAddContact} />
      <Filter
        filter={filter}
        onChange={handleFilterChange}
        onToggleSearchByPhone={handleToggleSearchByPhone}
        searchByPhone={searchByPhone}
      />
      <ContactList contacts={filteredContacts} onDeleteContact={handleDeleteContact} />
    </div>
  );
};

export default ContactManager;
