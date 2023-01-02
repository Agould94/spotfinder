import React, {useState, useEffect} from "react";
import ReviewForm from "./ReviewForm";
import { useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";



function RestaurantPage({user}){
    const[restaurant, setRestaurant] = useState({})
    const [reviews, setReviews]= useState([])
    let params = useParams()
    console.log("HIIIIII")
    console.log(params.id)
    console.log(restaurant)
    console.log(user)

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
   
    function handleDeleteReview(e){
        const id = e.target.value
        let newReviews
        fetch(`/reviews/${id}`,{
            method: "DELETE", 
            headers: {
                'Content-type': 'application/json',
            },
        })

        newReviews = reviews.filter((review)=> review.id != id)
        setReviews(newReviews)
    }

    let reviewsToDisplay 
    if(reviews){
        reviewsToDisplay = reviews.map((review)=>{
            console.log(review)
        return(
        <div key = {review.id}>
            <StarRatings
          rating = {review.stars}
          starDimension = "15px"
          starSpacing = ".5px"
          />
            <p>{review.content}</p>
            {review.user ? 
                <p>{review.user.username}</p>
                :
                null
            }
            {review.user.id === user.id ?
            <button value = {review.id} onClick = {handleDeleteReview}>Delete Your Review</button>
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