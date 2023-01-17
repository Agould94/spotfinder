import { Form, FormControl, Button } from 'react-bootstrap';
import React, {useState, useRef} from 'react';
import StarRatings from 'react-star-ratings'


function ReviewForm({restaurant, user, onReviewSubmit, tags, setTags, setRestaurantTags, restaurantTags}) {
    console.log(user)
    console.log(restaurant.id)
    const [id, setId] = useState(restaurant.id)
    const [content, setContent] = useState("")

    const [rating, setRating] = useState(1)

    const [errors, setErrors] = useState("")

    const [reviewTags, setReviewTags] = useState([])

    const [newTag, setNewTag] =useState("")
    console.log(newTag)
    console.log(reviewTags)
    console.log([...restaurantTags, ...reviewTags])

    function handleChangeRating(e){
        setRating(e)
    }

    function updateUserReviews(review){
        user.reviews = [...user.reviews, review]
        user.restaurants =[...user.restaurants, restaurant]
    }

    const formRef=useRef(null)

    function handleTagClick(e){
        setReviewTags([...reviewTags, e.target.value])
        const updatedTags = tags.filter((tag)=>tag != e.target.value)
        setTags(updatedTags)
    }

    function handleAddTags(){
        const review_tags = {review_tags: reviewTags}
        console.log(review_tags)
        fetch(`/restaurants/${restaurant.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(review_tags)
        }).then((r)=>
        r.json()
        ).then((data)=>{
            console.log(data)
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        const review = { stars: rating, content: content, restaurant_id: restaurant.id  }
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
            console.log(restaurant.id)
            handleAddTags()
            setRestaurantTags([...restaurantTags, ...reviewTags])
            setReviewTags([])
            setErrors("")
            setContent("")
        }
        formRef.current.reset()
    })
        ;
    }

    const displayPopularTags = tags.map((tag)=>{
        return(
        <Button value = {tag} variant = "secondary" size="sm" className="m-1" onClick = {handleTagClick}>{tag}</Button>
        )
    })

    function onAddTag(e){
        setNewTag(e.target.value)
    }

    function handleNewTag(){
        setReviewTags([...reviewTags, newTag])
        setNewTag("")
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
        <label>Add Tags that describe this Restaurant</label>
        <div>{displayPopularTags}<input className = "m-1" value = {newTag} onChange={onAddTag}/><Button size = "sm" variant = "secondary" className="m-1" onClick={handleNewTag}>Add Tag</Button></div>
        
        <br></br>
        {errors ? <div>{errors}</div> : null}
        <Button type="submit">Submit</Button>
        </Form>
    </div>
  );
}

export default ReviewForm;