import React,{Component} from 'react'
import {render} from 'react-dom'
import LifeCycle from './LifeCycle';
class App extends Component{
  handleClick=(e)=>{
    console.log(e);
  }
  constructor(props){
    super(props);
  }


  render(){

    var userDom={
      "width":"100%",
      "height":"100%"
    };


    return(
      <div>
         <div></div>

      {/*   <input type="button" name="" defaultValue="showDow" />*/}
      </div>
    )
  }
}
render(<App></App>,document.getElementById("root"));