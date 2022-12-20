import React, { useState } from 'react';
import { Form, FormControl } from 'react-bootstrap';

function Filter({ setFilter, setSearch, setPage, search, filter }){

  return (
    <Form>
      <FormControl
        as="input"
        value = {search}
        onChange ={(e)=>{
     
          setSearch(e.target.value)
        }
        }
        >
      </FormControl>
      <FormControl
        as="select"
        value={filter}
        onChange={(event) => {
          setPage(1)
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