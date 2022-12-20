import React, {useState, useRef} from "react";
import ReviewForm from "./ReviewForm";



function RestaurantPage({restaurant, user}){
    
    const [reviews, setReviews]= useState(restaurant.reviews)
    
    
    let reviewsToDisplay 
    if(restaurant.reviews){
        reviewsToDisplay = reviews.map((review)=>{
        return(
        <div>
            <p>{review.stars}</p>
            <p>{review.content}</p>
            {review.user ?
            <p>{review.user.username}</p>
            :
            null
        }
        </div>
        )}
    )}

    function handleReviewSubmit(data){
        setReviews([...reviews, data])
    }


    return(
        <div>
            <h1>{restaurant.name}</h1>
            <br/>
            <h2>{restaurant.vibe}</h2>
            <p>{restaurant.food_type}</p>
            <p>{restaurant.address}</p>
            <p>{restaurant.phone_number}</p>
            <ReviewForm restaurant={restaurant} user = {user} onReviewSubmit={handleReviewSubmit} ></ReviewForm>
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