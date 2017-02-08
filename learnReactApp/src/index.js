import React,{Component} from 'react'
import {render} from 'react-dom'
import InheritanceInversion from "./InheritanceInversion.js"
class App extends Component{
	constructor(props){
		super(props)
	}
	render(){
		var Spans=React.createElement("h1",null,"Hello");
		return (
			<div>
			<Spans />
				
			</div>
			)
	}

}
render(<App></App>,document.getElementById("root"))