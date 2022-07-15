import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contact() {
    return(
        <section className='contact'>
            <h2>Contact Information</h2>
            <Form className='form'>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" placeholder="Enter Message" />
                </Form.Group>
                <Button type="submit" className='subbtn'>Submit</Button>                  
            </Form>
        </section>
    );
}

export default Contact;