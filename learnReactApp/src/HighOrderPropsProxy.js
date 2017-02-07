/*react不推荐使用mixin之后，一般采用高阶组件(higher-order)的方式替代之前的mixin方案.实现高阶组件的方式一般有两种方式
1->属性代理:
关于属性代理有三大特质:
1.1控制props:在高阶组件中对传递过来的props进行curd操作.
1.2通过refs使用引用.
1.3抽象state
*/
import React,{Component} from 'react'
const CreateApp=(MyReactComponent)=>(
      class extends Component{
      	constructor(props){
      		super(props);
      		this.state={//抽象和分离state也就是把state通过props的方式传递了下去
      			name:""
      		}
      		this.getMyReactComponentRefs=this.getMyReactComponentRefs.bind(this);
      		this.onNameChange=this.onNameChange.bind(this);
      		this.getInputValue=this.getInputValue.bind(this);
      	}
      	getMyReactComponentRefs(MyReactComponentRef){
      		//1.2console.log(MyReactComponentRef.props);此处可以对props进行curd
      		//当ref绑定了一个函数时，该函数在组件挂载后立即执行，且该组件的第一个参数就是该ref的实例。这个实例可以是dom也可以是react组件.
      	}
      	onNameChange(event){
      		this.setState({
      			name:event.target.value
      		})
      	}
      	getInputValue(){
      		console.log(this.state.name)

      	}
      	render(){
      		const addNewProps={
      			newPropsName:"我是新增的props",//1.1此处传递新的props进去做到了增加props
                name:{
                value:this.state.name,
      			onChange:this.onNameChange
                },
      			getInputValue:this.getInputValue

      		}
      		return (
      			<MyReactComponent {...addNewProps} ref={this.getMyReactComponentRefs}></MyReactComponent>
      			)
      	}
      }
	)

class TestReactComp extends Component{
	render(){
		return (
			<div>
			<h1>Hello!Higher-Order!</h1>
			<hr/>
			<input type="button" value={this.props.newPropsName} className="btn btn-success"/>
			<hr/>
			<input type="text" {...this.props.name} className="form-control"/>
            <input type="button" className="btn btn-success" onClick={this.props.getInputValue} value="getValue"/>
			</div>
			)
	}
}
export default CreateApp(TestReactComp);