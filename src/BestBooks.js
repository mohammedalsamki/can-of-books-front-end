import React, { Component } from 'react'
import axios from 'axios';
import Carousel from "react-bootstrap";
import BookFormModel from "./BookFormModal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";






export class BestBooks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bookData: [],
            displayModel: false,

        };
    }

    displayModel = () => {
        this.setState({ displayModel: !this.state.displayModel })
    }
    componentDidMount = async () => {
        axios.get(`${process.env.REACT_APP_API_URL}/books`)
            .then((bookResponse) => {
                this.setState({ bookData: bookResponse.data });
            })


            .catch((error) => alert(error.message));
        console.log(this.state.bookData);
    };
    // submithandler = (e) => {
    //     e.preventDefault();
    //     const reqBody = {
    //         title: e.target.booknames.value,
    //         description: e.target.booksDescription.value,
    //         status: e.target.booksStatus.value,
    //         email: e.target.email.value,
    //     }


    //     axios
    //         .post(`${process.env.REACT_APP_API_URL} /books`, reqBody).then((resBooks) => {

    //             this.state.bookData.push(resBooks.data)
    //             this.setState({ bookData: this.state.bookData });
    //             this.displayModel();
    //         })
    //         .catch(() => alert("something Wrong"));
    // }
    submithandler=(e)=>{
        e.preventDefault();
        let config={
          method:"POST",
          baseURL:`${process.env.REACT_APP_API_URL}`,
          url:"/books",
          data:{
            title: e.target.booknames.value,
             description: e.target.booksDescription.value,
             status: e.target.booksStatus.value,
             email: e.target.email.value,
          }
          
        }
        axios(config).then(response=>{
          this.setState({
            catsList:response.data
          })
        })
      }
    // deleteHandler= (bookId)=>{
    //     axios.delete(`${process.env.REACT_APP_API_URL}/books/${bookId}`)
    //     .then((deleteres)={
    //         if (deleteres.data.deletedCount ===1){

    //             const booksArrNew = this.state.bookData.filter(
    //                 (book)=>book._id !==bookId
    //             );
    //             this.setState({bookData:booksArrNew});
    //         }
    //     }).catch(()=>alert("erroe mass"));
    // }
    handleDelete = (id) => {
        let bookId = id;
        let config = {
            method: "DELETE",
            baseURL: `${process.env.REACT_APP_API_URL}`,
            url: `/books/${bookId}`,

        }

        axios(config).then(response => {
            this.setState({
                catsList: response.data
            })
        })
    }

    render() {
        return (
            <div>
                <Button onClick={this.displayModel}>add new book</Button>

                {this.state.displayModel &&

                    <BookFormModel
                        show={this.state.displayModel}
                        handleClos={this.displayModel}
                        submithandler={this.displayModel}
                    />
                }

                {this.state.bookData.length > 0 &&
                    <>
                        {this.state.bookData.map((items) => {
                            return (
                                <>
                                    <Card >
                                        <Card.Body>
                                            <Card.Title>{items.title}</Card.Title>
                                            <Card.Text>{items.description}</Card.Text>
                                            <Card.Text>{items.status}</Card.Text>
                                            <Card.Text>{items.email}</Card.Text>
                                        </Card.Body>
                                        <Button variant="danger"
                                            onClick={() => this.handleDelete(items._id)}
                                        > Delete item</Button>
                                    </Card>
                                </>
                            )
                        })}

                    </>
                }

            </div>


        )

    }
}


export default BestBooks
