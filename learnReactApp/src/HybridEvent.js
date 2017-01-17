import React,{Component} from 'react'
class HybridEvent extends Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
       // this.handleClickQR=this.handleClickQR.bind(this);
        this.state={
            active:false
        }
    }
    componentDidMount(){
        document.body.addEventListener('click',e=>{
            this.setState({
                active:false
            })

        })
    }
    componentWillUnmount(){
        document.body.removeEventListener("click");
    }

    handleClick(e){
        e.preventDefault();
        this.setState({
            active:!this.state.active
        })
    }

    handleClickQR(e){
//        e.preventDefault();
        e.stoppagation();
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
            <div style={qrWrap}>
              <button type="button" onClick={this.handleClick}>二维码按钮</button>
              <div className="code" style={{display:this.state.active?"block":"none"}}>
              <div style={qrStyle} onClick={this.handleClickQR}></div>
              </div>
            </div>
        )
    }
    
}
export default HybridEvent;
