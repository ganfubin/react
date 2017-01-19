import React,{Component} from 'react'
class Form extends Component{

    constructor(props){
        super(props);
        this.state={
            "inputTextValue":"默认text值",
            "textareaValue":"默认textarea值",
            "radioValue":"boy",
            "checkboxValue":[],
            "checkboxValue1":[1,2,3]
        }
        this.changeInputValue=this.changeInputValue.bind(this);
        this.changeTextareaValue=this.changeTextareaValue.bind(this);
        this.changrRadioValue=this.changrRadioValue.bind(this);
        this.changeCheckBoxValue=this.changeCheckBoxValue.bind(this);
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
        var newArr=this.state.checkboxValue.push(e.target.value);

        this.setState({
            checkboxValue:newArr
        })

    }

    render(){
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
                <label>A<input type="checkbox" value="A" onClick={this.changeCheckBoxValue}/></label>
                <label>B<input type="checkbox" value="B" onClick={this.changeCheckBoxValue}/></label>
                <label>C<input type="checkbox" value="C" onClick={this.changeCheckBoxValue}/></label>
                <label>D<input type="checkbox" value="D" onClick={this.changeCheckBoxValue}/></label>
                <label>E<input type="checkbox" value="E" onClick={this.changeCheckBoxValue}/></label>
                <br />
               {
                   console.log(Object.prototype.toString.call(this.state.checkboxValue))
                 /*  this.state.checkboxValue.map(function (item) { 
                       return <div key={item}> 123123123</div>

                    })*/
               }


                </div>

                
                </div>
            </div>
        )
    }

}
export default Form;