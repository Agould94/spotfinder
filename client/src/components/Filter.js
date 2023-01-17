import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function Filter({ setFilter, setSearch, setPage, search, filter }){
  const history = useHistory()
  function handleClick(){
    history.push('/new')
  }
  return (
    <Form className = {"mt-3"}>
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
      <Button onClick = {handleClick} className = {"mt-3"}>Add New Restaurant</Button>
    </Form>
  
  );
};

export default Filter;