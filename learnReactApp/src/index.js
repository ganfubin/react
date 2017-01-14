import React,{Component} from 'react'
import {render} from 'react-dom'
class App extends Component{
  constructor(props){
    super(props);
  }
   eventFunc=(e)=>{
       console.log(e)
  }

  render(){
    return(
      <div>
        <input type="button"  defaultValue="事件绑定测试" className="btn btn-success" onClick={this.eventFunc}  />
      </div>
    )
  }
}
render(<App />,document.getElementById("root"));