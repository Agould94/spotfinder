import React, {useState} from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Filter from './Filter';
import RestaurantList from './RestaurantList';


function Home() {
    const [filter, setFilter] = useState("All")
  return (
    <Container className="justify-content-center home">
      <Row className="justify-content-center" infinite="true">
            <Col>
                <Filter setFilter = {setFilter}></Filter>
            </Col>
            <Col>
                <RestaurantList filter = {filter}/>
            </Col>
            <Col>
                map
            </Col>
      </Row>
    </Container>
  );
}

export default Home;