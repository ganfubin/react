import React,{Component} from 'react'
class NativeEvent extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
       this.refs.button.addEventListener("click",
            this.handleClick);
    }
    componentWillUnmount(){//使用原生事件时，记得要手动移除，否则很容易出现内存泄露,React的合成事件则不需要
        this.refs.button.removeEventListener("click");
    }
    handleClick(e){
        console.log(e);
    }
    render(){
        return <button type="button" ref="button" className="btn btn-success">TestButton</button>
    }
}
export default NativeEvent;