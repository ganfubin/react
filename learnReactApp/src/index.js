import React,{Component} from 'react'
import {render} from 'react-dom'
import FatherToSon from './FatherToSon'
class App extends Component{
  constructor(props){
    super(props);
  }

  render(){

    return(
      <div className="container">
        <FatherToSon></FatherToSon>
      </div>
    )
  }
}
render(<App></App>,document.getElementById("root"));