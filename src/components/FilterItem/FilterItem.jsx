import React from 'react';
import { Box, Checkbox, Input } from '@chakra-ui/react';

const Filter = ({ filter, onChange, onToggleSearchByPhone, searchByPhone }) => {
  return (
    <Box>
      <Checkbox
        isChecked={searchByPhone}
        onChange={onToggleSearchByPhone}
        mb={2}
      >
        Пошук за номером телефону
      </Checkbox>
      {!searchByPhone ? (
        <Input
          type="text"
          name="filter"
          placeholder="Пошук за іменем/прізвищем"
          value={filter}
          onChange={onChange}
        />
      ) : (
        <Input
          type="text"
          name="filterPhone"
          placeholder="Пошук телефону"
          value={filter}
          onChange={onChange}
        />
      )}
    </Box>
  );
};

export default Filter;
