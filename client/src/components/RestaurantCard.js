import React from 'react';
import { useState } from 'react';
import { Card, Image, Fade } from 'react-bootstrap';
import {useHistory} from 'react-router-dom'
import StarRatings from 'react-star-ratings'

function RestaurantCard({ restaurant, handleSetRestaurant }) {
    const [reviewClick, setReviewClick] = useState(false)
    let image
    let avg
    let ratings = [0]

    if(restaurant.reviews){
      
      restaurant.reviews.forEach((review)=>{
        ratings.push(review.stars)
      })
      avg = ratings.reduce((a,b)=> a+b)/ratings.length
      //console.log(avg)
      console.log(ratings)
    }
    console.log(avg)
    const history = useHistory()
    
    function handleDoubleClick(){
        handleSetRestaurant(restaurant)
        history.push(`/restaurants/${restaurant.id}`)
    }
    function handleClick(){
        setReviewClick(!reviewClick)
    }

        if(restaurant.image_url == "image_url"){
            image = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
        }
        else{
            image =restaurant.image_url
        }
    
  return (
    <Card onDoubleClick={handleDoubleClick} className = "justify-content-center mx-auto mt-2" style={{width: "44%"}}>
      <Image src= {image} />
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div style ={{width: '50%'}}>
          <Card.Title>{restaurant.name}</Card.Title>
            <Card.Text>{restaurant.address}</Card.Text>
            <Card.Text>{restaurant.phone_number}</Card.Text>
          </div>
          <div>
          <Card.Text as="h6">{restaurant.vibe}</Card.Text>
          <Card.Text>{restaurant.food_type}</Card.Text>
          <StarRatings
          rating = {avg}
          starDimension = "15px"
          starSpacing = ".5px"
          />
          </div>
        </div>
        <div onClick = {handleClick}>
            {reviewClick ?             
            restaurant.reviews[0] ?
                <div>
                    <Card.Text className = "mt-2">Reviews:</Card.Text>
                    <Card.Text>{restaurant.reviews[0].content}</Card.Text>
                </div>
                :
                <Card.Text className = "mt-2">No reviews...</Card.Text>
                :
                <Card.Text>See Reviews</Card.Text> 
            }
            
            
        </div>
      </Card.Body>
    </Card>
  );
}

export default RestaurantCard;