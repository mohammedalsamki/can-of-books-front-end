import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

import React, { Component } from 'react'

export class BookFormModal extends Component {
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
                                <Form.Control tybe="text" name="booknames" />
                            </Form.Group>

                            <Form.Group controlId="formEmail">
                                <Form.Label>Book Description</Form.Label>
                                <Form.Control type="text" name="booksDescription" />
                            </Form.Group>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Book Status</Form.Label>
                                <Form.Control type="text" name="booksStatus" />
                            </Form.Group>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Your Email</Form.Label>
                                <Form.Control type="text" name="email" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>

                        </Form>{" "}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary">Close it</Button>
                        <Button variant="primary">Save Changes</Button>
                    </Modal.Footer>


                </Modal>

            </div >
        )
    }
}

export default BookFormModal
