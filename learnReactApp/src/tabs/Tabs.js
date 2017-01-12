import React,{Component,PropTypes} from 'react';
export default class Tabs extends Component{
	static defaultProps={
		classPrefix:'tabs',
		onChange:()=>{}
	}
	constructor(props) {
		super(props);
		const currProps=this.props;//传给子组件的参数
		let activeIndex=0;//当前活跃状态的组件
		if('activeIndex' in currProps){
			activeIndex=currProps.activeIndex;
		}else if('defaultActiveIndex' in currProps){
			activeIndex=currProps.defaultActiveIndex;

		}

		this.state={
			activeIndex:activeIndex,
			prevIndex:activeIndex
		}
		
	}
	render(){
		return (
			<div className='ui-tabs'></div>
		    )
	}
}

//调用方式
<Tabs classPrefix={'tabs'} defaultActiveIndex={0}>
  <TabPane key={0} tab={'Tab 1'}>第一个内容</TabPane>
  <TabPane key={1} tab={'Tab 2'}>第二个内容</TabPane>
  <TabPane key={2} tab={'Tab 3'}>第三个内容</TabPane>
	
</Tabs>








