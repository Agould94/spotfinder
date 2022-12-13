import React, { useState } from 'react';
import { Form, FormControl } from 'react-bootstrap';

function Filter({ setFilter }){
  const [foodType, setFoodType] = useState('All');

  return (
    <Form>
      <FormControl
        as="select"
        value={foodType}
        onChange={(event) => {
          setFoodType(event.target.value);
          setFilter(event.target.value);
        }}
      >
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Italian">Italian</option>
        <option value="Chinese">Chinese</option>
        <option value="Mexican">Mexican</option>
        {/* additional options here */}
      </FormControl>
    </Form>
  );
};

export default Filter;