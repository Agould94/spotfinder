import React, {useState, useEffect} from "react";
import ReviewForm from "./ReviewForm";
import { useParams } from "react-router-dom";



function RestaurantPage({user}){
    const[restaurant, setRestaurant] = useState({})
    const [reviews, setReviews]= useState([])
    let params = useParams()
    console.log("HIIIIII")
    console.log(params.id)
    console.log(restaurant)
    
    useEffect(()=>{
        fetch(`/restaurants/${params.id}`)
        .then((r)=>r.json())
        .then((data)=>{
            console.log(data) 
            console.log("effect")
            setRestaurant(data)
            setReviews(data.reviews)
        })
    },[]
    );
   

    let reviewsToDisplay 
    if(reviews){
        reviewsToDisplay = reviews.map((review)=>{
        return(
        <div key = {review.id}>
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

    let imagesToDisplay
    if(restaurant.images){
         imagesToDisplay = restaurant.images.map((image)=>{
       
            return <img key = {image.id} src = {image.image} className="p-2" style = {{width: '150px', height: '150px'}}></img>
    }
    )
    }

    return(
        <div>
            <h1>{restaurant.name}</h1>
            <br/>
            <h2>{restaurant.vibe}</h2>
            <p>{restaurant.food_type}</p>
            <p>{restaurant.address}</p>
            <p>{restaurant.phone_number}</p>
            {imagesToDisplay}
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