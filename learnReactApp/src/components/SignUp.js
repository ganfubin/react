import React,{Component} from 'react'
import ajaxUrls from "../config/ajaxUrls.js";
import LoginAndSignupCss from "../css/LoginAndSignup.scss"
import { browserHistory } from 'react-router'//使用路由编程式导航
import ajaxUrlsAddress from "../config/ajaxUrls.js";
import errorInforMation from "../config/errorInforMation.js"
import $ from 'jquery'
class SignUp extends Component{
	constructor(props){
		super(props);
		//console.log(fetch);
		this.state={
		    		username:"",
		    		password:"",
		    		repeatPassword:"",
		    		//错误提示信息
		    		errInfo:[
		    			{errMessage:"",show:false,style:{color:""}},
		    			{errMessage:"",show:false,style:{color:""}},
		    			{errMessage:"",show:false,style:{color:""}}
		    		],
		    		//校验信息
		    		checkUserInfoReg:{
		                mobilePhone:/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/,
		                email:/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,
		                password:/^[\w]{6,14}$/		    			
		    		}

		}

		//校验方法
		this.changeSignStatusUI=this.changeSignStatusUI.bind(this);
		this.checkUserName=this.checkUserName.bind(this);
		this.checkPassWord=this.checkPassWord.bind(this);
		this.checkRepeatPassWord=this.checkRepeatPassWord.bind(this);
		this.signUp=this.signUp.bind(this);

       //更新方法
       this.setUserName=this.setUserName.bind(this);
       this.setPassWord=this.setPassWord.bind(this);
       this.setRepeatPassword=this.setRepeatPassword.bind(this);


       //登录
		this.goLogin=this.goLogin.bind(this);





	}

	setUserName(e){
		this.setState({
			username:e.target.value

		})
	}
	setPassWord(e){
		this.setState({
			password:e.target.value

		})

	}
	setRepeatPassword(e){
		this.setState({
			repeatPassword:e.target.value

		})
	}
	changeSignStatusUI(dom,wordColor,innerHtmlWord,){
		dom.style.color=wordColor;
		dom.innerHTML=innerHtmlWord;
	}

	checkUserName(){
		let userNameVal=this.state.username;
if(!this.state.checkUserInfoReg.mobilePhone.test(userNameVal) && !this.state.checkUserInfoReg.email.test(userNameVal)){
this.changeSignStatusUI(this.refs.userNameRealDom,'red',errorInforMation.incorrectUsernameFormat);
 return false;
  }else{
	let data={signupUsername:this.state.username};
		$.ajax({
			url:ajaxUrls.checkUserName,
			type:"POST",
			data:data
		}).then((resp)=>{
			if(resp.data==='1'){
	this.changeSignStatusUI(this.refs.userNameRealDom,'red',errorInforMation.usernameAlreadyExists);
	return false;		
			}
			if(resp.data==='0'){
	this.changeSignStatusUI(this.refs.userNameRealDom,'#4ebb00',errorInforMation.userNameIsOK);		
			}


		},(err)=>{
			console.log(err);

		})

}










		
	}
	checkPassWord(){


				let password=this.state.password;
				if(!this.state.checkUserInfoReg.password.test(password)){
					this.changeSignStatusUI(this.refs.passwordRealDom,'red',errorInforMation.incorrectPasswordFormat);
					return false;
				}else{
					this.changeSignStatusUI(this.refs.passwordRealDom,'','');
				}










	}
	checkRepeatPassWord(){
				if(this.state.password!==this.state.repeatPassword){
					this.changeSignStatusUI(this.refs.repeatPasswordRealDom,'red',errorInforMation.twiceDifferentPasswords);
					return false;
				}else{
					this.changeSignStatusUI(this.refs.repeatPasswordRealDom,'','');
				}


	}
	signUp(){
				let data={
					signupUsername:this.state.username,
					signupPassword:this.state.password
				}

				$.ajax({
					type:"POST",
					url:ajaxUrls.signUs,
					data:data
				}).then((resp)=>{
				
       			if(resp.data==='0'){
       			   sessionStorage.setItem("username",resp.info.username);
       			   sessionStorage.setItem("onlykey","musicxwgprivatekey");
       			   window.location.href="/";
                    }
				},(err)=>{
					console.log(err);
				})







	}
	goLogin(){
		browserHistory.push('/Login')
	}
	render(){
		return (
<div className="loginOrRegister">
<div className="loginSignUpWrap">
    <div className="loginSignUpTab">
        <a  style={{background:'black'}} onClick={this.goLogin}>登录</a>
        <a href="javascript:void(0);">注册</a>
    </div>
    <div  id="loginSignUpForm">
    <div className="userNameWrap">
        <span className="inputIcon"></span><input type="text" className="userName"  placeholder="请输入邮箱或手机号" required onChange={this.setUserName} onBlur={this.checkUserName}/>
        <span  className="promptMessage" ref="userNameRealDom"></span>
    </div>
    <div className="passwordWrap">
       	<span className="inputIcon"></span> <input type="password" className="userPassword"  placeholder="密码为6-14位数字、字母、下划线" required onChange={this.setPassWord}  onBlur={this.checkPassWord}/>
        <span  className="promptMessage"  ref="passwordRealDom"></span>
    </div>
        <div className="repeatPasswordWrap">
       	<span className="inputIcon"></span> <input type="password" className="repeatPassword" placeholder="重复密码" required onChange={this.setRepeatPassword} onBlur={this.checkRepeatPassWord}/>
        <span  className="promptMessage" ref="repeatPasswordRealDom"></span>
    </div>
    <div className="forgetPasswordWrap">
        <input type="button" value="注册" className="loginSignGo" onClick={this.signUp}/>
    </div>
     </div>
</div>
</div>
			)

	}
}
export default SignUp;