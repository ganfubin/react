import React,{Component} from 'react'
//核心思想就是使用props传递回调函数，当符合一定条件时，就在子组件里执行父组件传递过来的回调函数.
//还有更优雅的解决方案,见CrossLevelProps
class ListItem extends Component{
	static defaultProps={
		text:"",
		checked:false
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
	static defaultProps={
		list:[],
		handleItemChange:()=>{}
	}
	constructor(props){
		super(props);
		this.state={
			list:this.props.list.map(entry=>({
				text:entry.text,
				checked:entry.checked
			}))
		}

	}
	onItemChange(entry){
		const {list} =this.state;
		this.setState({
			list:list.map(function(prevEntry){
				return {
					text:prevEntry.text,
					checked:prevEntry.text===entry.text ? !prevEntry.checked:prevEntry.checked
				}

			})
		})
		this.props.handleItemChange(entry)

	}

	render(){
		return (
			<div>
				<ul>
					{this.state.list.map((entry,index)=>(
						<ListItem key={index} value={entry.text} checked={entry.checked} onChange={this.onItemChange.bind(this,entry)}></ListItem>

						)

					)}
				</ul>
			</div>

			)
	}

}

class App extends Component{
  constructor(props){
    super(props);
    this.handleItemChange=this.handleItemChange.bind(this);
  }
  handleItemChange(item){

  }

  render(){

    return(
      <div className="container">
      <List list={[{text:1,checked:false},{text:2,checked:true}]}></List>
      </div>
    )
  }
}

export default List;