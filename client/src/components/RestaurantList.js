import React from 'react';
import { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import InfiniteScroll from 'react-infinite-scroll-component'
import { NavItem } from 'react-bootstrap';

function RestaurantList({filter, handleSetRestaurant, search}) {
  const [restaurants, setRestaurants] = useState([])
  const [filteredRestaurants, setFilteredRestaurants]=useState([])
  const [page, setPage] = useState(1)
  const [filteredPage, setFilteredPage] = useState(1)
  const [loading, setLoading] = useState(false)
  console.log(restaurants)

  console.log(filter)
  console.log(search)

  useEffect(() => {
    const fetchRestaurants = async() => {
        setLoading(true)
        const response = await fetch(`/restaurants?page=1&food_type=${filter}`) //
        const data = await response.json()
        console.log([...data])
        console.log(restaurants)
        setLoading(false);
        setRestaurants(data)
    }
    fetchRestaurants();
  }, []);

  function fetchMoreRestaurants(){
    console.log(page)
    console.log(filter)
    fetch(`/restaurants?page=${page}&food_type=${filter}`)
    .then((r)=>r.json())
    .then((data)=>{console.log(data) 
    setRestaurants([...restaurants, ...data])})
    
  }

  function fetchFilteredRestaurants(){
    //setPage(1)
    fetch(`/restaurants?page=1&food_type=${filter}`)
    .then((r)=>r.json())
    .then((data)=>{
    setRestaurants([...data])
    //setPage(1)
    })
  }

  useEffect(()=>{
    fetchMoreRestaurants()
  },[page])

  useEffect(()=>{
    fetchFilteredRestaurants()
  }, [filter])
  
  const selectedRestauraunts = restaurants
  .filter((restaurant) => {
    if(filter === "All" && search === 's'){
      return true
    }
    else if(filter !="All" && search === 's'){
      return restaurant.food_type === filter 
    }
    else if(search != "s"){
      return restaurant.name.toLowerCase().includes(search.toLowerCase())
    }
  })
  // .find((restaurant)=> {if(search === 's'){return null}
  // else{
  //    return restaurant.name.toLowerCase().includes(search.toLowerCase())
  // }
  // })

  const resturauntsToDisplay =  selectedRestauraunts.map(restaurant => (
    <RestaurantCard key={restaurant.id} restaurant={restaurant} handleSetRestaurant={handleSetRestaurant} />
  ))
  
  function handleLoadMore(){
    console.log("howdy")
      if(restaurants.length<50){
        setPage(prevPage=>{
          const newPage = prevPage+1
          return newPage
        })
      }
    console.log(page)
    
  }

  

  return (
    <div id = "scroll" className = "justify-content-center" style={{height:'1000px' , overflow: 'scroll'}}>
        <InfiniteScroll 
        dataLength = {restaurants.length}  
        next = {handleLoadMore} 
        hasMore={true}
        endMessage = {<p style={{textAlign: 'center'}}>End</p>} 
        scrollableTarget = "scroll"
        >
            {resturauntsToDisplay}
        </InfiniteScroll>    
    </div>
  );
}

export default RestaurantList;