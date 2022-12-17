import React, {useState} from "react";
import ReviewForm from "./ReviewForm";



function RestaurantPage({restaurant, user}){
    
    
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
            <ReviewForm restaurant={restaurant} user = {user}></ReviewForm>
            {restaurant.reviews ? 
                reviewsToDisplay
                :
                null
            }
            <div>
            </div>
        </div>
    )
}

export default RestaurantPage