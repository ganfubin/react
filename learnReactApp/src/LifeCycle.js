import React,{Component,PropTypes} from 'react'
class LifeCylye extends Component{
     static propTypes={//es5:React.createClass({propTypes:React.PropTypes.number}).这对于默认的props设置也有效
        fatherKey:PropTypes.string
    };
     
     static defaultProps={//es5:getDefaultProps
         fatherKey:"我是默认的props值"
     };
    constructor(props){
        super(props);
        console.log("这个最先执行");
        this.getPropsValue=this.getPropsValue.bind(this);
        this.getStateValue=this.getStateValue.bind(this);
        this.state={//es5 getInitialState
            defaultStateKey:"我是默认的state值"
        }
    }
    //挂载或者卸载的生命周期(3个方法)
    componentWillMount(){
        console.log("componentWillMount,组件将要装载!");//只执行一次
    }
    componentDidMount(){
        console.log("componentDidMount,组件已经装载完成!");//只执行一次
    }
    componentWillUnmount(){//组件被移除之前被调用,可以用于做一些清理工作,在componentDidMount方法中添加的所有任务都需要在该方法中撤销，比如创建的定时器或添加的事件监听器
        console.log("将要卸载!");
    }
    //数据更新过程

    componentWillReceiveProps(nextProps){//组件接收到新的props时调用，并将其作为参数nextProps使用，此时可以更改组件props及state
        console.log("将要接收自身或者父组件传递下来的props的属性");
    }
    shouldComponentUpdate(nextProps,nextState){//组件是否应当渲染新的props或state，返回false表示跳过后续的生命周期方法，通常不需要使用以避免出现bug。在出现应用的瓶颈时，可通过该方法进行适当的优化.在首次渲染期间或者调用了forceUpdate方法后，该方法不会被调用
       console.log("是否需要更新?");
    }

    componentWillUpdate(){//接收到新的props或者state后，进行渲染之前调用，此时不允许更新props或state。

    }

    componentDidUpdate(){//完成渲染新的props或者state后调用,此时可以访问到新的DOM元素

    }
 


    getPropsValue(){
        console.log(this.props.fatherKey);
    }
    getStateValue(){
        console.log(this.state.defaultStateKey);
    }
    
    render(){
        console.log("我是render方法!");
        return (
            <div>
                <input type="button"  defaultValue="getPropsValue" className="btn btn-success" onClick={this.getPropsValue} />
                <input type="button"  defaultValue="getStateValue" className="btn btn-success" onClick={this.getStateValue} />
            </div>
        )
    }

}
export default LifeCylye;