import React, {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Filter from './Filter';
import RestaurantList from './RestaurantList';



function Home({handleSetRestaurant}) {
    const [filter, setFilter] = useState("All")
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)
    console.log(search)


  return (
    <Container className="justify-content-center home">
      <Row className="justify-content-center" infinite="true">
            <Col>
                <Filter search = {search} filter = {filter} setPage={setPage} setFilter = {setFilter} setSearch = {setSearch}></Filter>
            </Col>
            <Col>
                <RestaurantList page = {page} setPage = {setPage} filter = {filter} search = {search} handleSetRestaurant = {handleSetRestaurant}/>
            </Col>
            <Col>
                map
            </Col>
      </Row>
    </Container>
  );
}

export default Home;