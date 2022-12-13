import React from 'react';
import { useState } from 'react';
import { Card, Image, Fade } from 'react-bootstrap';

function RestaurantCard({ restaurant }) {
    const [reviewClick, setReviewClick] = useState(false)
    let image
    

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
    <Card className = "justify-content-center mx-auto mt-2" style={{width: "44%"}}>
      <Image src= {image} />
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
          <Card.Title>{restaurant.name}</Card.Title>
            <Card.Text>{restaurant.address}</Card.Text>
            <Card.Text>{restaurant.phone_number}</Card.Text>
          </div>
          <div>
          <Card.Text as="h6">{restaurant.vibe}</Card.Text>
          <Card.Text>{restaurant.food_type}</Card.Text>
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