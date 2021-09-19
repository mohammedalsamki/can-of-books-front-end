import React, { Component } from 'react'
import axios from 'axios';


export class BestBooks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bookData: [],
        };
    }
    componentDidMount = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/books`)
            .then((bookResponse) => {
                this.setState({ bookData: bookResponse.data });
            })
            .catch((error) => alert(error.message));
    };

    render() {
        return (
            <div>
                {this.state.bookData.map((books) => {
                    return (
                        <h3 >{books.title}</h3>,
                        <p >{books.description}</p>,
                        <h4>{books.status}</h4>
                    )
                })}

            </div>
        
  
    )
}
}


export default BestBooks
