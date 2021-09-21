import React, { Component } from 'react';
import BestBooks from './BestBooks';
import "bootstrap/dist/css/bootstrap.min.css";



class App extends Component {
  // constructor(props){
  //   super(props);
  //   this.state={
  //     data:[]
  //   }
  // }
 
  render() {
    return (
      <>
      <h1>Data</h1>
      <BestBooks />
      </>
    )
  }
}

export default App