import React,{Component} from 'react'
import {render} from 'react-dom'
import HybridEvent from './HybridEvent'
class App extends Component{
  constructor(props){
    super(props);
  }

  render(){

    return(
      <div>
      <HybridEvent></HybridEvent>
      </div>
    )
  }
}
render(<App></App>,document.getElementById("root"));