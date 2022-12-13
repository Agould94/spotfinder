import React from 'react';
import { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';

function RestaurantList({filter}) {
  const [restaurants, setRestaurants] = useState([])
  const [filteredRestaurants, setFilteredRestaurants]=useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  console.log(page)

  console.log(filter)

  useEffect(() => {
    const fetchRestaurants = async() => {
        setLoading(true)
        const response = await fetch(`/restaurants?food_type=${filter}&page=${page}`) //
        const data = await response.json()
        console.log([...data])
        setRestaurants([...data])
        setLoading(false);
    }
    fetchRestaurants();
  }, [page, filter]);

   // function to handle scrolling
   const handleScroll = () => {
    // calculate current scroll position and window height
    const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight || window.innerHeight;
    const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

    // if scrolled to bottom, load next page of restaurants
    if (scrolledToBottom && !loading) {
        setPage(page + 1)
    }
  }

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [loading]);

  
  const cards = restaurants
  .map(restaurant => (
    <RestaurantCard key={restaurant.id} restaurant={restaurant} />
  ))

  

  return (
    <div className = "justify-content-center" onScroll={handleScroll}>
        {cards}
    </div>
  );
}

export default RestaurantList;