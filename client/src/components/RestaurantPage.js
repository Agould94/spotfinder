import React, {useState} from "react";

function RestaurantPage({restaurant}){

    
    let reviewsToDisplay 
    if(restaurant.reviews){
        reviewsToDisplay = restaurant.reviews.map((review)=>{
        return(
        <div>
            <p>{review.stars}</p>
            <p>{review.content}</p>
        </div>
        )}
    )}


    return(
        <div>
            <h1>{restaurant.name}</h1>
            <br/>
            <h2>{restaurant.vibe}</h2>
            <p>{restaurant.food_type}</p>
            <p>{restaurant.address}</p>
            <p>{restaurant.phone_number}</p>
            {restaurant.reviews ? 
                reviewsToDisplay
                :
                null
            }
        </div>
    )
}

export default RestaurantPage