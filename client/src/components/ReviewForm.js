import { Form, FormControl, Button } from 'react-bootstrap';
import React, {useState, useRef} from 'react';
import StarRatings from 'react-star-ratings'


function ReviewForm({restaurant, user, onReviewSubmit}) {
    console.log(user)
    const [content, setContent] = useState("")

    const [rating, setRating] = useState(1)

    const [errors, setErrors] = useState("")

    function handleChangeRating(e){
        setRating(e)
    }

    function updateUserReviews(review){
       user.reviews = [...user.reviews, review]
       user.restaurants.push(restaurant)
    }

    const formRef=useRef(null)

    function handleSubmit(e) {
        e.preventDefault();
        const review = { stars: rating, content: content, user_id: user.id, restaurant_id: restaurant.id  }
        fetch("/reviews", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(review),
        }).then((r) => 
           r.json()
        ).then((data)=>{
    
        if(data.errors){
            setErrors(data.errors[0])
        }else{
            onReviewSubmit(data)
            updateUserReviews(review)
            setErrors("")
        }
        formRef.current.reset()
    })
        ;
    }

  return (
    <div>

        <Form onSubmit={handleSubmit} ref={formRef}>
            <label>Star Rating:</label><br/>
            <StarRatings
            rating = {rating}
            starRatedColor = "blue"
            changeRating = {handleChangeRating}
            numberOfStars = {5}
            name = {'rating'}
            starDimension = '25px'
            />
            <br/>
        <label>Add a Review:</label>
        <FormControl as="input" type="text" placeholder="Enter text" value = {content} onChange={(e)=>setContent(e.target.value)} />
        {errors ? <div>{errors}</div> : null}
        <Button type="submit">Submit</Button>
        </Form>
    </div>
  );
}

export default ReviewForm;