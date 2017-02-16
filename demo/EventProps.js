import React,{Component,Proptypes} from 'react'
import emmiter from "./EventEmitter.js"
//这个例子走不通，只是列出了一个全局的事件对象系统出来，省去了传递或者context的方式，实际并不推荐这样做!
class ListItem extends Component{
	static defaultProps={
		checked:false
	}

	constructor(props){
		super(props);
	}
	render(){
		return (
			<li>
				<input type="checkbox" checked={this.props.checked} onChange={this.props.onChange}/>
				<span>{this.props.value}</span>
			</li>

			)
	}


}

class List extends Component{
	constructor(props){
		super(props);
		this.state={
			list:this.props.list.map((entry)=>(
				text:entry.text,
				checked:entry.checked||false
				))
		}

	}
	onItemChange(entry){
		const {list} =this.state;
		this.setState({
			list:list.map((prevEntry)=>(
			{
				text:prevEntry.text,
				checked:prevEntry.text===entry.text ? !prevEntry.checked :prevEntry.checked
			}

				))
		})

		emmiter.emitEvent("ItemChange",entry);

	}
	render(){
		return (

			<div>
				<ul>
					{this.state.list.map((entry,index)=>(

						<ListItem key={index} value={entry.text} checked={entry.checked} onChange={this.onItemChange.bind(this,entry)} ></ListItem>


						))}
				</ul>

			</div>


			)

	}
}



