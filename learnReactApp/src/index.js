import React,{Component} from 'react'
import {render} from 'react-dom'
import Form from './Form'
class App extends Component{
  constructor(props){
    super(props);
  }

  render(){

    return(
      <div className="container">
        <Form></Form>
      </div>
    )
  }
}
render(<App></App>,document.getElementById("root"));