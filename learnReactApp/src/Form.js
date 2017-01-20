import React,{Component} from 'react'
class Form extends Component{

    constructor(props){
        super(props);
        this.state={
            "inputTextValue":"默认text值",
            "textareaValue":"默认textarea值",
            "radioValue":"boy",
            "checkboxValue":[],
            "selectRadioValue":"01",
            "selectCheckBoxValue":[]
        }
        this.changeInputValue=this.changeInputValue.bind(this);
        
        this.changeTextareaValue=this.changeTextareaValue.bind(this);
        
        this.changrRadioValue=this.changrRadioValue.bind(this);

        this.changeCheckBoxValue=this.changeCheckBoxValue.bind(this);
        this.getCheckBoxValue=this.getCheckBoxValue.bind(this);

        this.changeSelectRadio=this.changeSelectRadio.bind(this);
        this.getSelectRadioValue=this.getSelectRadioValue.bind(this);

        this.changeSelectCheckBox=this.changeSelectCheckBox.bind(this);
        this.getSelectCheckBoxValue=this.getSelectCheckBoxValue.bind(this);





    }
    //单行表单

    changeInputValue(e){
        this.setState({
            inputTextValue:e.target.value
        })
    }

   //单行文字输入框
    changeTextareaValue(e){
        this.setState({
            textareaValue:e.target.value
        })

    }
    //单选框
    changrRadioValue(e){
        this.setState({
            "radioValue":e.target.value
        })
    }
    //复选框
    changeCheckBoxValue(e){
        const {checked,value}=e.target;
        let {checkboxValue}=this.state;

        if(checked && checkboxValue.indexOf(value)===-1 ){
            checkboxValue.push(value);
        }else{
           checkboxValue=checkboxValue.filter(function (i) { 
                return i!==value
             })
        }


        this.setState({
            checkboxValue
        })
             

    }


     //查看复选框按钮的值的函数

    getCheckBoxValue(){
        console.log(this.state.checkboxValue);
    }

    changeSelectRadio(e){
        const {selectRadioValue}=this.state;
        const {value}=e.target;
        this.setState({
            "selectRadioValue":value
        })

    }
    //查看select单选框的值
    
    getSelectRadioValue(e){
        console.log(this.state.selectRadioValue);
    }



    //查看select复选框的值
    getSelectCheckBoxValue(){
        console.log(this.state.selectCheckBoxValue);
    }

    changeSelectCheckBox(e){
        
        const {options}=e.target;//options is a obj.not an array.
        //selectCheckBoxValue
        const selectCheckBoxValue=Object.keys(options).filter(function(i){
        return options[i].selected===true
       }).map(function(i){
        return options[i].value
       });
       this.setState({
        selectCheckBoxValue
       })

//       console.log(selectCheckBoxValue);

    }


    render(){

        return(
            <div>
                
                <div style={{border:"1px solid black","height":"500px",width:"100%",borderRadius:"10px",padding:"10px"}}>
                
                
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
                <label>A<input type="checkbox" value="A" onChange={this.changeCheckBoxValue} checked={this.state.checkboxValue.indexOf("A")!==-1}/></label>
                <label>B<input type="checkbox" value="B" onChange={this.changeCheckBoxValue} checked={this.state.checkboxValue.indexOf("B")!==-1}/></label>
                <label>C<input type="checkbox" value="C" onChange={this.changeCheckBoxValue} checked={this.state.checkboxValue.indexOf("C")!==-1}/></label>
                <label>D<input type="checkbox" value="D" onChange={this.changeCheckBoxValue} checked={this.state.checkboxValue.indexOf("D")!==-1}/></label>
                <label>E<input type="checkbox" value="E" onChange={this.changeCheckBoxValue} checked={this.state.checkboxValue.indexOf("E")!==-1}/></label>
                <br />
                </div>
                 {/*select单选框*/}   

                <div>
                    <select onChange={this.changeSelectRadio} value={this.state.selectRadioValue}>
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                    </select>
                </div>

                {/*select复选框*/}

                <div>
                    
                    <select onChange={this.changeSelectCheckBox} multiple={true} value={this.state.selectCheckBoxValue}>
                      <option value="beijing">北京</option>
                      <option value="shanghai">上海</option>
                      <option value="hangzhou">杭州</option>
                    </select>
                </div>




                <input type="button" className="btn btn-success" onClick={this.getCheckBoxValue} value="取得复选框的值"/>
                <input type="button" className="btn btn-success" onClick={this.getSelectRadioValue} value="取得单选select的值"/>
                <input type="button" className="btn btn-success" onClick={this.getSelectCheckBoxValue} value="取得复选select的值"/>

                </div>
            </div>
        )
    }

}
export default Form;