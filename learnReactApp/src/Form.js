import React,{Component} from 'react'
class Form extends Component{

    constructor(props){
        super(props);
        this.state={
            "inputTextValue":"默认text值",
            "textareaValue":"默认textarea值",
            "radioValue":"boy",
            "checkboxValue":[]
        }
        this.changeInputValue=this.changeInputValue.bind(this);
        this.changeTextareaValue=this.changeTextareaValue.bind(this);
        this.changrRadioValue=this.changrRadioValue.bind(this);
        this.changeCheckBoxValue=this.changeCheckBoxValue.bind(this);
        this.getCheckBoxValue=this.getCheckBoxValue.bind(this);
    }

    changeInputValue(e){
        this.setState({
            inputTextValue:e.target.value
        })
    }


    changeTextareaValue(e){
        this.setState({
            textareaValue:e.target.value
        })

    }

    changrRadioValue(e){
        this.setState({
            "radioValue":e.target.value
        })
    }

    changeCheckBoxValue(e){
        const {checked,value}=e.target;
        let {checkboxValue}=this.state;

        if(checked && checkboxValue.indexOf(value)===-1 ){
            checkboxValue.push(value);

        }else{
           checkboxValue=checkboxValue.filter(function (i) { //建立一个不符合回调函数条件的新数组
                return i!==value
             })
        }


        this.setState({//这是个异步方法
            checkboxValue
        })
             

    }

    getCheckBoxValue(){
        console.log(this.state.checkboxValue);
    }

    render(){
        const {checkboxValue}=this.state;

        return(
            <div>
                
                <div style={{border:"1px solid black","height":"200px",width:"100%",borderRadius:"10px",padding:"10px"}}>
                
                
                <div>
                <input type="text"  value={this.state.inputTextValue} onChange={this.changeInputValue} />
                {this.state.inputTextValue}
                </div>


                <div>
                <textarea onChange={this.changeTextareaValue} value={this.state.textareaValue}></textarea>
                {this.state.textareaValue}       
                </div>

                {/*单选框*/}
                <div>
                 <label>
                  Boy<input type="radio"  value="boy"  onChange={this.changrRadioValue} checked={this.state.radioValue==='boy'} />
                 </label>
                 <label>
                  Girl<input type="radio" value="girl" onChange={this.changrRadioValue} checked={this.state.radioValue==='girl'}/>
                 </label>
                   &nbsp;&nbsp;&nbsp;{this.state.radioValue}
                </div>

                {/*复选框*/}

                <div>
                <label>A<input type="checkbox" value="A" onChange={this.changeCheckBoxValue} checked={checkboxValue.indexOf("A")!==-1}/></label>
                <label>B<input type="checkbox" value="B" onChange={this.changeCheckBoxValue} checked={checkboxValue.indexOf("B")!==-1}/></label>
                <label>C<input type="checkbox" value="C" onChange={this.changeCheckBoxValue} checked={checkboxValue.indexOf("C")!==-1}/></label>
                <label>D<input type="checkbox" value="D" onChange={this.changeCheckBoxValue} checked={checkboxValue.indexOf("D")!==-1}/></label>
                <label>E<input type="checkbox" value="E" onChange={this.changeCheckBoxValue} checked={checkboxValue.indexOf("E")!==-1}/></label>
                <br />
                </div>


                <input type="button" className="btn btn-success" onClick={this.getCheckBoxValue}/>
                </div>
            </div>
        )
    }

}
export default Form;