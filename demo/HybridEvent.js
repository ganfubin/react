import React,{Component} from 'react'
class HybridEvent extends Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
        this.fatherEvent=this.fatherEvent.bind(this);
        this.state={
            active:false
        }
    }
    componentDidMount(){
        document.body.addEventListener('click',e=>{
            if(e.target){
                return;
            }

            this.setState({
                active:false
            })
            console.log(this.state.active);

        })
    }
    componentWillUnmount(){
        document.body.removeEventListener("click");
    }

    handleClick(e){
      e.preventDefault();
      //  e.stopPropagation();//React合成事件系统的委托机制，在合成事件内部仅仅对最外层的容器进行了绑定，并且依赖事件的冒泡机制完成了委派。也就是说事件并没有直接绑定到div.qr元素上,所以在这里使用e.preventDefault并没有用,stopPropagation也并不起作用.
/*使用了reactEvent.nativeEvent.stopPropagation()也不行*/
        this.setState({
            active:!this.state.active
        })
    }

    handleClickQR(e){
        e.preventDefault();
    }

    fatherEvent(){
        console.log(1232222);

    }

    render(){
        
        var qrWrap={
            width:"200px",
            height:"200px",
            border:"1px solid black"
        };
        var qrStyle={
            width:"50px",
            height:"50px",
            background:"red"
        };

        return (
            <div style={qrWrap} onClick={this.fatherEvent}>
              <button type="button" onClick={this.handleClick}>二维码按钮</button>
              <div className="code" style={{display:this.state.active?"block":"none"}}>
              <div style={qrStyle}></div>
              </div>
            </div>
        )
    }
    
}
export default HybridEvent;
