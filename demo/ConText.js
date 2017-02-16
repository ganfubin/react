import React,{Component,PropTypes} from 'react'
class Button extends Component{
	//必须指定context的数据类型
	static contextTypes={
		colorList:PropTypes.array
	}
	constructor(props){
		super(props);

	}

	render(){
		var children=this.context.colorList.map((item,index)=>(
			<button key={index} style={{background:item.color}}>delete</button>
			))
		return (
			<div>{children}</div>

			)

	}
}
class Message extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div>
				{this.props.text}<Button>Delete</Button>
			</div>

			)
	}
}
class MessageList extends Component{
		static defaultProps={
		messages:[
		{
			text:"text1",color:"red",

		},
		{
			text:"text2",color:"orange"
		}

		]


	}
	static childContextTypes={//类型必须指定
		colorList:PropTypes.array
	}
	getChildContext(){//类型必须指定
		return (
			{
				colorList:[
				{color:"red"},
				{color:"green"}

				]
			}
			)
	}

//指定数据并要将数据传递下去的父组件要定义 childContextTypes 和 getChildContext() ；想要接收到数据的子组件 必须定义 contextTypes 来使用传递过来的 context 。


	render(){
		var children=this.props.messages.map((message,index)=>(
			<Message text={message.text} key={index}></Message>

			))
			return (
				<div>
					{children}
				</div>

				)
	}
}

export default MessageList;

/*
如果不用context，则会像如下这样。会很复杂，需要一层层传递。
import React,{Component} from 'react'
class Button extends Component{
	constructor(props){
		super(props);

	}
	render(){
		return (
			<button style={{background:this.props.color}}>
			{this.props.children}
			</button>
			)

	}
}
class Message extends Component{
	constructor(props){
		super(props);

	}
	render(){
		return (
			<div>
				{this.props.text}
				<Button color={this.props.color}>Delete</Button>
			</div>


			)

	}
}

class  MessageList extends Component{
	static defaultProps={
		messages:[
		{
			text:"text1",color:"red",

		},
		{
			text:"text2",color:"orange"
		}

		]


	}
	constructor(props){
		super(props);

	}
	render(){
			var children=this.props.messages.map((message,index)=>(
				<Message text={message.text} color={message.color} key={index}></Message>
				))
		return (
			<div>
				{children}
			</div>


			)

	}
}

export default MessageList;*/

