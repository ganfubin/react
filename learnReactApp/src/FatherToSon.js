import React,{Component} from 'react'
function Item({value}){
	return (
		<li><span>{value}</span></li>
		)
}
class FatherToSon extends Component{
	constructor(props){
		super(props);
		this.changeState=this.changeState.bind(this);
		this.state={
			list:[]
		}

	}
	changeState(){
		this.setState({
			list:[
			{name:"name1",text:"text1"},
			{name:"name2",text:"text2"},
			{name:"name3",text:"text3"},
			{name:"name4",text:"text4"}
			]
		})
	}

	render(){
		return (
			<div>
				<input type="button" onClick={this.changeState} className="btn btn-success" value="changeValue"/>
				{
					this.state.list.map((item,index)=>(
							<Item value={item.text} key={index}></Item>
							)
					)
				}
			</div>

			)

	}
}
export default FatherToSon;