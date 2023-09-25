import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import { Box, UnorderedList, ListItem } from '@chakra-ui/react';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <Box>
      <UnorderedList>
        {contacts.map((contact) => (
          <ListItem key={contact.id}>
            <ContactItem contact={contact} onDeleteContact={onDeleteContact} />
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default ContactList;
