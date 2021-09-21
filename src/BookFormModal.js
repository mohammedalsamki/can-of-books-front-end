import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

import React, { Component } from 'react'




export class BookFormModal extends Component {



    
    handleTitle = (e) => { this.setState({ title: e.target.booknames.value }) };
        descriptionHandler = (e) => { this.setState({ description: e.target.booksDescription.value }) };
        statusHandler = (e) => { this.setState({ status: e.target.booksStatus.value }) };
        emailHandler = (e) => { this.setState({ email: e.target.email.value }) }
    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.handleClos}>

                    <Modal.Header closeButton>
                        <Modal.Title>add ur book here</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form onSubmit={this.props.submithandler}>

                            <Form.Group controlId="formEmail">
                                <Form.Label>Book Name</Form.Label>
                                <Form.Control tybe="text" name="booknames" onChange={this.props.title}/>
                            </Form.Group>

                            <Form.Group controlId="formEmail">
                                <Form.Label>Book Description</Form.Label>
                                <Form.Control type="text" name="booksDescription" onChange={this.props.description} />
                            </Form.Group>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Book Status</Form.Label>
                                <Form.Control type="text" name="booksStatus" onChange={this.props.status}/>
                            </Form.Group>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Your Email</Form.Label>
                                <Form.Control type="text" name="email" onChange={this.props.email}/>
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={this.props.submithandler}>
                                Submit
                            </Button>

                        </Form>{" "}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClos}>Close it</Button>
                        <Button variant="primary" onClick={this.props.submithandler}>Save Changes</Button>
                    </Modal.Footer>


                </Modal>

            </div >
        )
    }
}

export default BookFormModal
