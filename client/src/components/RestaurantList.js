import React from 'react';
import { useState, useEffect, useRef } from 'react';
import RestaurantCard from './RestaurantCard';
import InfiniteScroll from 'react-infinite-scroll-component'


function RestaurantList({filter, search, page, setPage, setRestaurantPage, restaurants, setRestaurants, handleSetTags}) {
  // const [restaurants, setRestaurants] = useState([])
  console.log(page)
  const [loading, setLoading] = useState(false)
  const scrollElement = useRef(null)
  console.log(restaurants)

  useEffect(() => {
    const fetchRestaurants = async() => {
        setLoading(true)
        const response = await fetch(`/restaurants?page=1&food_type=${filter}`) //
        const data = await response.json()
        setLoading(false);
        setRestaurants(data)
        
    }
    fetchRestaurants()
    
    ;
  }, []);
  
  function fetchFilteredRestaurants(){
    fetch(`/restaurants?page=${page}&food_type=${filter}`)
    .then((r)=>r.json())
    .then((data)=>{
      if(page === 1){
        setRestaurants(data)
      }else{
        setRestaurants([...restaurants, ...data])
      }
    })
  }

  function resetScrollPosition(){
    const element = scrollElement.current
    element.scrollTop = 0;
  }

  useEffect(()=>{
    fetchFilteredRestaurants()
  }, [filter, page])

  useEffect(()=>{
    resetScrollPosition()
  }, [filter]
  )
  
  const searchRestaurants = restaurants.filter((restaurant)=>{
    return restaurant.name.toLowerCase().includes(search.toLowerCase())
  })

  const resturauntsToDisplay = searchRestaurants.map(restaurant => (
    <RestaurantCard key={restaurant.id} restaurant={restaurant} setRestaurantPage={setRestaurantPage} restaurants = {searchRestaurants}/>
  ))
  
  function handleLoadMore(){
      if(restaurants.length<50){
        setPage(prevPage=>{
          const newPage = prevPage+1
          return newPage
        })
      } 
  }

  

  return (
    <div ref = {scrollElement} id = "scroll" className = "justify-content-center" style={{height:'1000px' , overflow: 'scroll'}}>
        <InfiniteScroll 
        dataLength = {restaurants.length}  
        next = {handleLoadMore} 
        hasMore={true}
        endMessage = {<p style={{textAlign: 'center'}}>End</p>} 
        scrollableTarget = "scroll"
        initialScrollY={0}
        >
            {resturauntsToDisplay}
        </InfiniteScroll>    
    </div>
  );
}

export default RestaurantList;