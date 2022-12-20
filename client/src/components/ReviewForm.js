import { Form, FormControl, Button } from 'react-bootstrap';
import React, {useState, useRef} from 'react';
import StarRatings from 'react-star-ratings'


function ReviewForm({restaurant, user, onReviewSubmit}) {
    const [content, setContent] = useState("")

    const [rating, setRating] = useState(1)

    function handleChangeRating(e){
        setRating(e)
    }

    const formRef=useRef(null)

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/reviews", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({ stars: rating, content: content, user_id: user.id, restaurant_id: restaurant.id  }),
        }).then((r) => 
           r.json()
        ).then((data)=>{
        console.log(data)
        onReviewSubmit(data)
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
        <Button type="submit">Submit</Button>
        </Form>
    </div>
  );
}

export default ReviewForm;