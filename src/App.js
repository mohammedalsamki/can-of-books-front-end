import React, { Component } from 'react';
import BestBooks from './BestBooks';
import axios from 'axios';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      data:[]
    }
  }
 
  render() {
    return (
      <>
      <h1>Data</h1>
      <BestBooks bookData={this.props.bookData}/>
      </>
    )
  }
}

export default App