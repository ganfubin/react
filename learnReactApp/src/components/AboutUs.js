import React,{Component} from 'react'
import imageUrls from "../config/imagesUrls.js";
import AboutUsCss from "../css/AboutUs.scss"
class AboutUs extends Component{
	constructor(props){
		super(props);
		this.state={
	  userJob:["CEO","CXO","CFO","CTO","CMO"],			
      userNameList:["关羽","张飞","赵云","黄忠","马超"],
      userIntroduction:["我是关羽","我是张飞","我是赵云","我是黄忠","我是马超"],
      userImages:imageUrls.aboutUsImages,
      userJobSingle:"",
      userNameSingle:"",
      userIntroductionSingle:"",
      userImagesSingle:"",
      rotateLogo:imageUrls.rotateLogo


		}

	}
	componentDidMount() {
this.changeTeamUI(0);
    //百度地图接口调用
    var map = new BMap.Map("container");
    var pt = new BMap.Point(105.876, 29.243);
    map.centerAndZoom(pt, 15);
    map.enableScrollWheelZoom();
    var logoMapSrc = imageUrls.logoMapSrc;
    var myIcon = new BMap.Icon(logoMapSrc, new BMap.Size(30, 30));
    var marker2 = new BMap.Marker(pt, { icon: myIcon });
    map.addOverlay(marker2);
    var opts = { width: 200, height: 60,title: "小乌龟音乐工作室" };
    var infoWindow = new BMap.InfoWindow("用心聆听,用爱打造", opts);
    map.openInfoWindow(infoWindow, pt); 


	}

	changeTeamUI(index,event){
		this.setState({
            userJobSingle:this.state.userJob[index],     	
            userNameSingle:this.state.userNameList[index],
            userIntroductionSingle:this.state.userIntroduction[index],
            userImagesSingle:this.state.userImages[index]

		})

	}
	render(){
		return (
<div>
<div className="aboutUs">
 <div className="aboutUsWrap">
    <div className="teamCard">
       <div className="teamCardItemTitle">
          {this.state.userJobSingle}
       </div>
       <div className="teamCardItemBody">
           <div className="teamSinglePhoto">
               <img src={this.state.userImagesSingle} alt="" width="200" id="teamSingleImage"/>
           </div>
           <div className="teamSingleDetail">
               <h3 id="teamSingleName">{this.state.userNameSingle}</h3>
               <p id="teamSingleDetail">{this.state.userIntroductionSingle}</p>
           </div>
       </div>
    </div>
    <ul className="teamList">
    {
    	this.state.userImages.map((teamItem,index)=>(
           <li key={index} onClick={this.changeTeamUI.bind(this,index)}><a href="javascript:void(0);" style={{backgroundImage: 'url('+teamItem+')'}}></a></li>

    		))
    }

    </ul>
 </div>

</div>
<div id="contactDetails">
<div>
<img src={this.state.rotateLogo} alt="公司logo" id="leftLogo" />
<p>
一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字
</p>
</div>
</div>
	<div id="container"></div>
</div>

			)

	}
}
export default AboutUs;