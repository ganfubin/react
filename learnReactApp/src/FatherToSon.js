import React,{Component} from 'react'
function ListItem({value}){
	return (
        <li>
        	<span>{value}</span>
        </li>
		)

}
class FatherToSon extends Component{
	
	constructor(props){
		super(props);
		this.getDefaultPropsValue=this.getDefaultPropsValue.bind(this);
	}

	getDefaultPropsValue(){
		console.log(this.props);
	}


	render(){
		return (
                <div>
                	<input type="button" className="btn btn-success" value="getClick" onClick={this.getDefaultPropsValue} />
                </div>
			)

	}
}
export default FatherToSon;