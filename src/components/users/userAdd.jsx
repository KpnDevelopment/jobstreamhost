import React from 'react'
import { Button , Form ,Col} from 'react-bootstrap';


export default function UserAdd() {
    return (
<div className='container'>
        <Form className="form-con"> 
            <Form.Row >
            <Form.Group as={Col} controlId="uname">
                <Form.Label>Name</Form.Label>
                <Form.Control />
            </Form.Group>
            </Form.Row>
            <Form.Row>
            <Form.Group as={Col} controlId="umail">
                <Form.Label>E-Mail</Form.Label>
                <Form.Control/>
            </Form.Group>
            <Form.Group as={Col} controlId="uphone">
                <Form.Label>Phone</Form.Label>
                <Form.Control  />
            </Form.Group>
            </Form.Row>
            <Form.Row>
            <Form.Group as={Col} controlId="udob">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control  />
            </Form.Group>
            <Form.Group as={Col} controlId="aboutCompany">
                <Form.Label>Gender</Form.Label>
                <Form.Control w />
            </Form.Group>
            </Form.Row>
            <Form.Row>
            <Form.Group as={Col} controlId="add1">
                <Form.Label>Address</Form.Label>
                <Form.Control/>
            </Form.Group>

            <Form.Group as={Col} controlId="add2">
                <Form.Label>Address line 2</Form.Label>
                <Form.Control />
            </Form.Group>
            <Form.Group as={Col} controlId="add3">
                <Form.Label>Address line 3 </Form.Label>
                <Form.Control  />
            </Form.Group>

            <Form.Group as={Col} controlId="add4">
                <Form.Label>Pincode</Form.Label>
                <Form.Control  />
            </Form.Group>
            </Form.Row>
            <Form.Row>
            <Form.Group as={Col} controlId="aboutCompany">
                <Form.Label>Qualification</Form.Label>
                <Form.Control as='textarea' />
            </Form.Group>
            </Form.Row>
            <Form.Row>
            <Form.Group as={Col} controlId="aboutCompany">
                <Form.Label>Previous Jobs (If Any)</Form.Label>
                <Form.Control as='textarea' />
            </Form.Group>
            </Form.Row>
            <Form.Row>
            <Form.Group as={Col} controlId="aboutCompany">
                <Form.Label> Experience (If Any)</Form.Label>
                <Form.Control as='textarea' />
            </Form.Group>
            </Form.Row>

        </Form>
        <Button variant="primary" type="submit">
    Submit
  </Button>
</div> 
  )
}