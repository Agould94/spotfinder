import { Form, FormControl, Button } from 'react-bootstrap';

function ReviewForm() {

    function handleSubmit(){
        
    }

  return (
    <Form onSubmit={handleSubmit}>
      <label>Add a Review:</label>
      <FormControl type="text" placeholder="Enter text" />
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default ReviewForm;