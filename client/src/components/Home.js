import React, {useState} from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import Filter from './Filter';
import RestaurantList from './RestaurantList';



function Home({setRestaurantPage, restaurants, setRestaurants, tags, setTags, handleSetTags}){
   const [filter, setFilter] = useState("All")
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)

    let displayTags
      if(tags){
      displayTags = tags.map((tag)=>
        <li>
        <Badge>{tag}</Badge>
        </li>
      )
    }

  return (
    <Container fluid className="justify-content-center home ">
      <Row className="justify-content-center" infinite="true">
            <Col className = "orange">
                <Filter search = {search} filter = {filter} setPage={setPage} setFilter = {setFilter} setSearch = {setSearch}></Filter>
            </Col>
            <Col className = "green">
                <RestaurantList page = {page} setPage = {setPage} filter = {filter} search = {search} setRestaurantPage={setRestaurantPage} restaurants={restaurants} setRestaurants={setRestaurants} handleSetTags = {handleSetTags}/>
            </Col>
            <Col className = "orange">
                <div>Popular Tags:</div>

                <ol>{displayTags}</ol>
            </Col>
      </Row>
    </Container>
  );
}

export default Home;