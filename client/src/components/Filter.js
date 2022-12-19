import React, { useState } from 'react';
import { Form, FormControl } from 'react-bootstrap';

function Filter({ setFilter, setSearch }){
  const [foodType, setFoodType] = useState('All');
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <Form>
      <FormControl
        as="input"
        value = {searchTerm}
        onChange ={(e)=>{
          setSearchTerm(e.target.value)
          setSearch(e.target.value)
        }
        }
        >
      </FormControl>
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