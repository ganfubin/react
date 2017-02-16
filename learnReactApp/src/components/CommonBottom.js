import React,{Component} from 'react'
import ImageUrls from "../config/imagesUrls.js";
import CommonBottomCSS from "../css/CommonBottom.scss"
class CommonBottom extends Component{
	constructor(props){
	  super(props);	
	  this.state={
	  	contactUs:ImageUrls.contactUs
	  }
	}
	render(){
		return (

<div className="footer">
	<div id="howFindUs">
			<h2 className="findusTitle">您如果对我们的网站内容或者我们的某位成员或者某些作品表示有兴趣,还可以通过以下方式找到我们.</h2>
		<p>
			<img src={this.state.contactUs[0]} alt="我们的微博"/>
			<span>微博</span>
		</p>
		<p>
			<img src={this.state.contactUs[1]} alt="我们的微信"/>
			<span>微信</span>
		</p>
		<p>
			<a target="_blank" href="https://github.com/musicxwg">
				<img  src={this.state.contactUs[2]} alt="我们的github" title="我们的github"/>
				<span>Github</span>
			</a>
		</p>
		<p>
			<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=596713230&site=qq&menu=yes">
				<img  src={this.state.contactUs[3]} title="点击我联系小乌龟"/>
				<span>客服QQ</span>
			</a>
		</p>
	</div>
	<div className="copyRight">
		©musicxwg.com&nbsp;&nbsp;小乌龟音乐工作室&nbsp;&nbsp;版权所有&nbsp;渝ICP备15011242号-1
	</div>
</div>
			)
	}
}
export default CommonBottom;