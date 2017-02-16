import React,{Component} from 'react'
import {Link,IndexLink} from 'react-router'
import ajaxUrls from '../config/ajaxUrls.js';
import imagesUrls from '../config/imagesUrls.js';
import CommonTopCss from '../css/CommonTop.scss'

function WhereLogin(props){
	if(props.isLogin===true){
		return (
	<div className="yesLogin">
	      <a id="LoginOut" onClick={props.loginOut}>退出</a>	
	      <a>{props.userLoginName}</a>		      	
	</div>		

			)
	}else{
return (
              <div className="noLogin">
               	   <Link to="/SignUp">注册</Link>		      	
               	   <Link to="/Login">登录</Link>
	            </div>
	)

	}

}

class CommonTop extends Component{
	constructor(props){
		super(props);
		this.state={
			isLogin:false,
			username:"",
			mainLogo:imagesUrls.mainLogo
		}
		this.loginOut=this.loginOut.bind(this);
	}
	componentDidMount() {
		if(sessionStorage.getItem("onlykey")==="musicxwgprivatekey" && sessionStorage.getItem("username")!=""){

this.setState({
	isLogin:true,
	username:sessionStorage.getItem("username")
})


		}else{
			this.setState({
				isLogin:false
			})
		}
	}
	loginOut(){
     var data={"loginout":"loginout"};
    ajaxUrls.ajaxSend({
    type:"post",
    url:ajaxUrls.saygoodbye,
    data:data,
    success:function(resp){
        var data=JSON.parse(resp);
    			if(data.data==='0'){
	   	 	sessionStorage.clear();
	   	 	window.location.reload();
                    }
    },
    error:function(err){
        console.log('Send error!');
    },

});

	}
	render(){
		return (
         <div className="topWrap">
         	     <div className="loginAndSignupWrap">
                    <WhereLogin isLogin={this.state.isLogin} userLoginName={this.state.username} loginOut={this.loginOut}></WhereLogin>

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