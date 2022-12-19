import React, {useState} from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Filter from './Filter';
import RestaurantList from './RestaurantList';



function Home({handleSetRestaurant}) {
    const [filter, setFilter] = useState("All")
    const [search, setSearch] = useState('s')
  return (
    <Container className="justify-content-center home">
      <Row className="justify-content-center" infinite="true">
            <Col>
                <Filter setFilter = {setFilter} setSearch = {setSearch}></Filter>
            </Col>
            <Col>
                <RestaurantList filter = {filter} search = {search} handleSetRestaurant = {handleSetRestaurant}/>
            </Col>
            <Col>
                map
            </Col>
      </Row>
    </Container>
  );
}

export default Home;