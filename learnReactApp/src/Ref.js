import React,{Component} from 'react'
class Ref extends Component{
    constructor(props){
        super(props);
        this.letRefsInputGetFocus=this.letRefsInputGetFocus.bind(this);
    }
    letRefsInputGetFocus(){
        if(this.refsElement!==null){
            this.refsElement.focus();

        }
    }

    refFunc=(ref)=>{//当ref绑定了一个函数时，该函数在组件挂载后立即执行，且该组件的第一个参数就是该ref的实例。这个实例可以是dom也可以是react组件.当ref作为组件时，可以调用该组件的任意方法，不过一般不推荐这样做，因为这样破坏了封装性
        this.refsElement=ref;
    }

    render(){
        return (
            <div>
                <input type="text" ref={this.refFunc} className="btn btn-default" />
                <input type="button" value="Click" onClick={this.letRefsInputGetFocus} className="btn btn-success" />
            </div>
        )

    }
}

export default Ref;