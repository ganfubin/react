import React,{Component} from 'react'
import {Link,IndexLink} from 'react-router'
import ajaxUrls from '../config/ajaxUrls.js';
import imagesUrls from '../config/imagesUrls.js';
import CommonTopCss from '../css/CommonTop.scss'


function isLogin(){
	return (
		<div className="yesLogin">
	      <a id="LoginOut">退出</a>	
	      <a>222</a>		      	
	      </div>
		)
}

function noLogin(){
	return (
              <div className="noLogin">
               	   <Link to="/SignUp">注册</Link>		      	
               	   <Link to="/Login">登录</Link>
	            </div>

		)
}

class CommonTop extends Component{
	constructor(props){
		super(props);
		this.state={
			isLogin:true,
			username:"",
			mainLogo:imagesUrls.mainLogo
		}
	}
	render(){
		//是否登录渲染
		var IsLoginComponent=null;
		if(!this.state.isLogin){
            IsLoginComponent=isLogin;
		}else{
           IsLoginComponent=noLogin;
		}
		
		return (
         <div className="topWrap">
         	     <div className="loginAndSignupWrap">
                 <IsLoginComponent></IsLoginComponent>
	     </div>

	     <div className="logo">
	     	<img src={this.state.mainLogo}/>
	     	<span>小乌龟音乐</span>
	     </div>

		<div className="vlinkWrap">
                   <IndexLink to="/" activeClassName="router-active">首页</IndexLink>
               	   <Link to="/Service" activeClassName="router-active">服务项目</Link>
	               <Link to="/MusicDemo" activeClassName="router-active">音乐试听</Link>
               	   <Link to="/MusicDo" activeClassName="router-active">音乐定制</Link>
               	   <Link to="/AboutUs" activeClassName="router-active">关于我们</Link>

	</div>
         </div>


			)
	}
}
export default CommonTop;