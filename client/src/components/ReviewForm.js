import { Form, FormControl, Button } from 'react-bootstrap';
import React, {useState, useRef} from 'react';

function ReviewForm({restaurant, user, onReviewSubmit}) {
    const [content, setContent] = useState("")

    const [star, setStar] = useState(0)
    console.log(star)
    const formRef=useRef(null)

    console.log(content)
    function handleSubmit(e) {
        e.preventDefault();
        fetch("/reviews", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({ stars: star, content: content, user_id: user.id, restaurant_id: restaurant.id  }),
        }).then((r) => 
           r.json()
        ).then((data)=>{
        console.log(data)
        onReviewSubmit(data)
        formRef.current.reset()
    })
        ;
    }

    function handleChange(event){
        setStar(parseInt(event.currentTarget.labels[0].innerText));
    }

  return (
    <Form onSubmit={handleSubmit} ref={formRef}>
        <label>Star Rating:</label>
        <div key = 'inline-radio'>
            <Form.Check
                inline
                label="1"
                name="group1"
                type='radio'
                id='inline-radio-1'
                onChange={handleChange}
                name="group1"

            />
            <Form.Check
                inline
                label="2"
                name="group1"
                type='radio'
            id='inline-radio-2'
            onChange={handleChange}
            name="group1"

            />
            <Form.Check
                inline
                label="3"
                type='radio'
                id='inline-radio-3'
                onChange={handleChange}
                name="group1"

            />
                <Form.Check
                inline
                label="4"
                type='radio'
                id='inline-radio-4'
                onChange={handleChange}
                name="group1"

            />
                <Form.Check
                inline
                label="5"
                type='radio'
                id='inline-radio-5'
                onChange={handleChange}
                name="group1"

            />
          </div>
      <label>Add a Review:</label>
      <FormControl as="input" type="text" placeholder="Enter text" value = {content} onChange={(e)=>setContent(e.target.value)} />
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default ReviewForm;