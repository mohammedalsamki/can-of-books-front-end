import React, { Component } from 'react'
import axios from 'axios';
import BookFormModel from "./BookFormModal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";






export class BestBooks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bookData: [],
            displayModel: false,
            title: '',
            description: '',
            status: '',
            email: '',
            id: ''
        };
    }

    displayModel = () => {
        this.setState({ displayModel: !this.state.displayModel })
    }
 
    componentDidMount = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/books/data`)
            .then(res => {
                this.setState({ bookData:res.data });
            })

        }
        handleTitle = (e) => { this.setState({ title: e.target.booknames.value }) };
        descriptionHandler = (e) => { this.setState({ description: e.target.booksDescription.value }) };
        statusHandler = (e) => { this.setState({ status: e.target.booksStatus.value }) };
        emailHandler = (e) => { this.setState({ email: e.target.email.value }) }



        submithandler = (e) => {
            e.preventDefault();
            let config = {
                method: "POST",
                baseURL: process.env.REACT_APP_BACKEND_URL,
                url: `/books`,
                data: {
                    title: this.state.title,
                    description: this.state.description,
                    status: this.state.status,

                    email: this.state.email
                }
            }
            axios(config).then(res => {
                console.log(res.data)
                this.setState({
                    bookData: res.data
                })
            })
            console.log(this.state.bookData);
        }
        // submithandler=(e)=>{
        //     e.preventDefault();
        //     let config={
        //       method:"POST",
        //       baseURL:`${process.env.REACT_APP_API_URL}`,
        //       url:"/books",
        //       data:{
        //         title: e.target.booknames.value,
        //          description: e.target.booksDescription.value,
        //          status: e.target.booksStatus.value,
        //          email: e.target.email.value,
        //       }

        //     }
        //     axios(config).then(response=>{
        //       this.setState({
        //         catsList:response.data
        //       })
        //     })
        //   }
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
                url: `/books/${id}`,

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
                            submithandler={this.submithandler}
                        />
                    }

                    {this.state.bookData.length > 0 &&
                        <>
                            {this.state.bookData.map((items,index) => {
                                return (
                                    
                                        <Card key={index}>
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
                                    
                                )
                            })}

                        </>
                    }

                </div>


            )

        }
    }


export default BestBooks
