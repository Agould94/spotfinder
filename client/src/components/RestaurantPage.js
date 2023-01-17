import React, {useState, useEffect} from "react";
import ReviewForm from "./ReviewForm";
import { useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";
import {Badge} from "react-bootstrap"



function RestaurantPage({user, restaurants}){
    const [restaurant, setRestaurant] = useState({})
    const [tags, setTags] = useState([])
    console.log(restaurants)
    let params = useParams()
    console.log(params.id)
    //setRestaurant(restaurants.find((restaurant)=> restaurant.id==params.id))
    console.log(restaurant)
    const [reviews, setReviews]= useState(restaurant.reviews)
    
    
    const [restaurantTags, setRestaurantTags] = useState([])
  
    useEffect(()=>{
        if(restaurants.length===0){
        fetch(`/restaurants/${params.id}`)
        .then((r)=>r.json())
        .then((data)=>{
            setRestaurant(data)
            console.log(restaurant)
            setReviews(data.reviews)
            setTags(data.popular_tags)
            setRestaurantTags(data.tags.map((tag=>tag.tag)))
        })
    }else{
        const r = restaurants.find((restaurant)=> restaurant.id == params.id)
        setRestaurant(r)
        setReviews(r.reviews)
        setTags(r.popular_tags)
        setRestaurantTags(r.tags.map((tag)=>tag.tag))
    }
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
            {user && review.user.id === user.id ?
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

    // setTags(restaurant.popular_tags)
    // // const displayPopularTags = restaurant.popular_tags.map((tag)=>{
    // //     <Button variant = "secondary" size="sm">{tag}</Button>
    // // })

    // tags.forEach((tag)=>{
    //     console.log(tag)
    // })

    tags.forEach((tag)=>console.log(tag))

    const displayedTags = restaurantTags.map(tag=><Badge>{tag}</Badge>)

    return(
        <div>
            <h1>{restaurant.name}</h1>
            <br/>
            <h3>The vibe of this restaurant:</h3>
            <h4>{restaurant.vibe}</h4>
            <h3>Tags:</h3>
            <div>{displayedTags}</div>
            <h5>This restaurant serves:</h5>
            <p>{restaurant.food_type} food.</p>
            <p>Address:</p>
            <p>{restaurant.address}</p>
            <p>Phone Number:</p>
            <p>{restaurant.phone_number}</p>
            {imagesToDisplay}
            <ReviewForm restaurant={restaurant} user = {user} onReviewSubmit={handleReviewSubmit} tags = {tags} setTags = {setTags} setRestaurantTags={setRestaurantTags} restaurantTags={restaurantTags}></ReviewForm>
            <br></br>
            <div>Reviews:</div>
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