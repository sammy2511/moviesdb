import React, {Component} from 'react'
import './App.css'

class Error extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){

    return(
        <div><h1>Opps! Movie Not Found</h1></div>
    )
  }
}

export default Error;
