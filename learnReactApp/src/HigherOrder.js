import React,{Component} from 'react'
const MyContainer=(WrappedComponent)=>
class extends Component{
	static defaultProps={
		name:"defaultName",
		age:"defaultAge"
	}
	constructor(props){
		super(props);
	}
	render(){
		return (<WrappedComponent {...this.props}></WrappedComponent>)
	}
}

class MyComponent extends Component{
	constructor(props){
		super(props);
		console.log(this.props)
	}
	render(){
		return (
			<h1>{this.props.name}</h1>

			)
	}

}
export default MyContainer(MyComponent)
