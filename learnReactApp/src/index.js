import React,{Component} from 'react'
import {render} from 'react-dom'
import HighOrderPropsProxy from "./HighOrderPropsProxy.js"
class App extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			<HighOrderPropsProxy></HighOrderPropsProxy>
			)
	}

}
render(<App></App>,document.getElementById("root"))