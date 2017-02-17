import React,{Component} from 'react'
import imageUrls from "../config/imagesUrls.js";
import teamInfo from "../config/teamInfo.js"
import AboutUsCss from "../css/AboutUs.scss"
class AboutUs extends Component{
	constructor(props){
		super(props);
		this.state={
	    userJob:teamInfo.userJob,
      userNameList:teamInfo.userNameList,
      userIntroduction:teamInfo.userIntroduction,
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
小乌龟音乐是一家集midi音乐制作,录音混音,作词作曲,艺术教学的创业型公司,团队成员主要由在校大学生组成.小乌龟的老家坐落于美丽的卫星湖畔黄瓜山下,也便是重庆文理学院星湖校区所在之地.自团队创立初,我们一直秉承"用心聆听.用爱打造,用音乐倾听彼此"的价值理念,力求为亲爱的客户做出更优美,更高质量的,更个性化的音乐.我们在小乌龟,期待与您共同邂逅艺术之美...
</p>
</div>
</div>
	<div id="container"></div>
</div>

			)

	}
}
export default AboutUs;
