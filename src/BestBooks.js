import React, { Component } from 'react'
import axios from 'axios';
import { Carousel } from "react-bootstrap";




export class BestBooks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bookData: [],
        };
    }
    componentDidMount = async () => {
        axios.get(`${process.env.REACT_APP_API_URL}/books`)
            .then((bookResponse) => {
                this.setState({ bookData: bookResponse.data });
            })
            

            .catch((error) => alert(error.message));
            console.log(this.state.bookData);
    };

    render() {
        return (
            <>
                <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

                {this.state.bookData.length ? (
                    this.state.bookData.map((books) => {
                        return (
                            <>
                                <h2> Authir: {books.title}</h2>
                                <Carousel fade>
                                    {books.books.map((book) => {
                                        return (
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgsqSLyj11Gistgv15fByTtzcJ35BvhHRDxA&usqp=CAU"
                                                    alt="First slide"
                                                />
                                                <Carousel.Caption>
                                                    <h3>{book.title}</h3>
                                                    <p>{book.description}</p>
                                                    <p>{book.status}</p>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                        );
                                    })}
                                </Carousel>
                            </>
                        );
                    })
                ) 
                : 
                
                    <h3>No Books Found :</h3>
                
                }</>


        )
                    
    }
}


export default BestBooks
