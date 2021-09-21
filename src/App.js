import React, { Component } from 'react'
import Bookdata from './componnent/bookdata';
import axios from 'axios';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      booklist:[],
      title: '',
      description: '',
      status: '',
      email: '',
      id: '',
      showUpdate:false
    }
  }
  componentDidMount=()=>{
    axios.get(`${process.env.REACT_APP_API_URL}/book-list`)
    .then(res=>{
      this.setState({booklist:res.data});    
    })
  }
  handleDelete=(id)=>{
    let config={
      method:"DELETE",
      baseURL:process.env.REACT_APP_API_URL,
      url:`/delete-book/${id}`
    }
    axios(config).then(res=>{
      console.log(res.data);
    })

  }

  handleTitle = (e) => { this.setState({ title: e.target.value }) };
  descriptionHandler = (e) => { this.setState({ description: e.target.value }) };
  statusHandler = (e) => { this.setState({ status: e.target.value }) };
  emailHandler = (e) => { this.setState({ email: e.target.value }) }

  handleSubmit=(e)=>{
    e.preventDefault();
    let config={
      method:"POST",
      baseURL:process.env.REACT_APP_API_URL,
      url:`/create-book`,
      data:{
        title:this.state.title,
        description:this.state.description,
        status:this.state.status,
        email:this.state.email
      }
    }
    axios(config).then(res=>{
      console.log(res.data)
      this.setState({
        booklist:res.data
      })
    })
  }
  handleUpdate=(id,title,description,status,email)=>{
    this.setState({
       title:this.state.title,
        description:this.state.description,
        status:this.state.status,
        email:this.state.email,
      id:id,
      showUpdate:true
    })
  }
  handleUpdateForm=()=>{
    let config={
      method:"PUT",
      baseURL:process.env.REACT_APP_API_URL,
      url:`/update-book/${this.state.id}`,
      data:{
        title:this.state.title,
        description:this.state.description,
        status:this.state.status,
        email:this.state.email
      }
    }
    axios(config).then(res=>{
      this.setState({
        booklist:res.data
      })
    });
  }
  render() {
    return (
      <div>
        {
          !this.state.showUpdate?<>
                  <form onSubmit={this.handleSubmit}>
          <input type="texts" placeholder="title" onChange={this.handleTitle}/>
          <input type="texts" placeholder="description" onChange={this.descriptionHandler}/>
          <input type="texts" placeholder="status" onChange={this.statusHandler}/>
          <input type="texts" placeholder="email" onChange={this.emailHandler}/>
          <input type="submit" value="create"/>
        </form>
          </>:
          // Update form
        <form onSubmit={this.handleUpdateForm}>
         <input type="texts" placeholder="title" onChange={this.handleTitle}/>
          <input type="texts" placeholder="description" onChange={this.descriptionHandler}/>
          <input type="texts" placeholder="status" onChange={this.statusHandler}/>
          <input type="texts" placeholder="email" onChange={this.emailHandler}/>
        <input type="submit" value="update"/>
      </form>   
        }
        {
          this.state.booklist.map(books=>{
            return <Bookdata 
                            title={books.title}
                            description={books.description}
                            status={books.status}
                            email={books.email}
                            id={books._id}
                            handleDelete={this.handleDelete}
                            handleUpdate={this.handleUpdate}
                            />
          })
        }
      </div>
    )
  }
}

export default App