import React,{Component} from 'react'
import ajaxUrls from "../config/ajaxUrls.js";
import { browserHistory } from 'react-router'//使用路由编程式导航
import errorInforMation from "../config/errorInforMation.js"
class Login extends Component{
	constructor(props){
		super(props);
		this.state={
			username:"",
			password:"",
		}
		this.getUserName=this.getUserName.bind(this);
		this.getPassword=this.getPassword.bind(this);
		this.goSignup=this.goSignup.bind(this);//注册路由跳转方法
		this.login=this.login.bind(this);
	}
	getUserName(e){
		this.setState({
			username:e.target.value
		})

	}

	goSignup(){
     browserHistory.push('/SignUp')
	}

	getPassword(e){
		this.setState({
			password:e.target.value
		})
	}

	login(){
       		let This=this;
       		let data={
       			loginUsername:this.state.username,
       			loginPassword:this.state.password

       		}


 ajaxUrls.ajaxSend({
    type:"post",
    url:ajaxUrls.login,
    data:data,
    success:function(resp){
        var data=JSON.parse(resp);
        if(data.data==='0'){
       			   sessionStorage.setItem("username",data.info.username);
       			   sessionStorage.setItem("onlykey","musicxwgprivatekey");
       			   window.location.href="/";		
			}else{
			       	This.refs.loginErr.style.display='block';
                    This.refs.loginErr.innerHTML=errorInforMation.loginERR
                    This.refs.loginErr.style.color='red';	
			}


    },
    error:function(err){
        console.log('Send error!');
    },

});





















       	}


	render(){
		return (

<div className="loginOrRegister">
<div className="loginSignUpWrap">
	<div className="loginSignUpTab">
		<a href="javascript:void(0);">登录</a>
		<a  style={{background: 'black'}} onClick={this.goSignup}>注册</a>
	</div>
	<div  id="loginSignUpForm">
	<div className="userNameWrap">
		<span className="inputIcon"></span><input type="text" className="userName"  placeholder="请输入邮箱或手机号" required onChange={this.getUserName} />
	</div>
	<div className="passwordWrap">
		<span className="inputIcon"></span><input type="password" className="userPassword"  placeholder="请输入密码" required onChange={this.getPassword}/>
		<span  className="promptMessage" ref="loginErr"></span>
	</div>
	<div className="forgetPasswordWrap">
		<input type="button" value="登录" className="loginSignGo" onClick={this.login} />
        <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=596713230&site=qq&menu=yes" className="forgetPassword">忘记密码?</a>
	</div>
     </div>
</div>

	</div>


			)

	}
}
export default Login;