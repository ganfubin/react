//高阶组件之反向继承
//1.渲染劫持
import React,{Component} from 'react'
import {render} from 'react-dom'
const MyContainer=(WrappedComponent)=>(
	class extends WrappedComponent{
		static defaultProps={
			loggedIn:false
		}
		render(){
			if(!this.props.loggedIn){//渲染劫持之条件渲染
			return super.render();
			}else{
				return null;
			}
		}
	}
	)

const CreateApp=(MyComponent)=>(
	class extends MyComponent{
		render(){
			const elementsTree=super.render();
			let newProps={};
			if(elementsTree && elementsTree.type==='input'){
				newProps={value:"may the force be with you"}
			}
			const props=Object.assign({},elementsTree.props,newProps);
			const newElementsTree=React.cloneElement(elementsTree,props,elementsTree.props.children));
            return newElementsTree;

		}
	}

	)








class TestApp extends Component{
	render(){
		return(
			<h1>Hello,React</h1>
			)
	}
}
export default MyContainer(TestApp);