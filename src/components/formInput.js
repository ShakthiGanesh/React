import React, { useState } from 'react'
import { Button, Form} from 'react-bootstrap'

function FormInput () {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };


    return(
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="userRating"  >
                <Form.Label> Rating</Form.Label>
                <Form.Control type="number" min="0" max="10" required/>
                <Form.Control.Feedback type="invalid">Rating should be a number from 0 to 10</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="userName" >
                <Form.Label> Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your Name" minLength="3"  required/>
                <Form.Control.Feedback type="invalid">Must be greater than 2 characters</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="userComments">
                <Form.Label>Comments</Form.Label>
                <Form.Control as="textarea" rows="3" minLength="1" required/>
                <Form.Control.Feedback type="invalid">Shouldn't be left blank</Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default FormInput