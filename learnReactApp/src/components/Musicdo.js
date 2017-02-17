import React,{Component} from 'react'
import MusicdoCss from "../css/Musicdo.scss"
import ajaxUrls from "../config/ajaxUrls.js";
import errorInforMation from "../config/errorInforMation.js"
import {Link,IndexLink} from 'react-router'
class Musicdo extends Component {
    constructor(props) {
        super(props);

        this.state = {
                yesProfessional: "0",
                isForStudy: "0",
                whoGetTheMusicGift: "0",
                choiceYouService: "0",
                contactWay: "",
                isLogin: false,
                username: ""

            }
            //radio受控组件方法绑定
        this.changeYesProfessional = this.changeYesProfessional.bind(this);
        this.changeIsForStudy = this.changeIsForStudy.bind(this);
        this.changeWhoGetTheMusicGift = this.changeWhoGetTheMusicGift.bind(this);
        this.changeChoiceYouService = this.changeChoiceYouService.bind(this);
        this.chanegContactWay = this.chanegContactWay.bind(this);
        this.postMusicOrder = this.postMusicOrder.bind(this);

    }
    componentDidMount() {
        if (sessionStorage.getItem("onlykey") === "musicxwgprivatekey" && sessionStorage.getItem("username") != "") {

            this.setState({
                isLogin: true,
                username: sessionStorage.getItem("username")
            })


        } else {
            this.setState({
                isLogin: false
            })
        }
    }
    changeYesProfessional(e) {
        this.setState({
            yesProfessional: e.target.value
        })
    }
    changeIsForStudy(e) {
        this.setState({
            isForStudy: e.target.value
        })
    }
    changeWhoGetTheMusicGift(e) {
        this.setState({
            whoGetTheMusicGift: e.target.value
        })
    }
    changeChoiceYouService(e) {
        this.setState({
            choiceYouService: e.target.value
        })
    }
    chanegContactWay(e) {
        this.setState({
            contactWay: e.target.value
        })
    }
    postMusicOrder() {



        var data = {
            yesProfessional: this.state.yesProfessional,
            isForStudy: this.state.isForStudy,
            whoGetTheMusicGift: this.state.whoGetTheMusicGift,
            choiceYouService: this.state.choiceYouService,
            contactWay: this.state.contactWay,
            username: this.state.username
        }

        ajaxUrls.ajaxSend({
            type: "post",
            url: ajaxUrls.postyoumusic,
            data: data,
            success: function(resp) {
                var data = JSON.parse(resp);
                if (data.data === '0') {
                    alert(errorInforMation.postSuccessFully);
                    return;
                }
                if (data.data === '1') {
                    alert(errorInforMation.postSoFast);
                    return;
                }

            },
            error: function(err) {
                console.log('Send error!');
            },

        });
    }

	render(){
		return (
<div className="musicdoWrap">
<div className="musicdoBody">

  <div className="loginTitle"  style={{'display':this.state.isLogin?'none':'block'}}>
       该功能需要<Link to="/Login">登录</Link>或<Link to="/SignUp">注册</Link>后才能使用
   </div>
   <div className="loginTitle" style={{'display':this.state.isLogin?'block':'none'}}>
       您需要填写部分信息，以便于我们给您做电话回访.
   </div>

    <div className="formWrap" style={{'opacity':this.state.isLogin?1:0.2}}>
   <div className="choiceItem clear">
     <p>(一).专业?</p>
     <label className="label">
       <input type="radio" value="0" onChange={this.changeYesProfessional}  checked={this.state.yesProfessional==="0"}/>
       <span className="radioBeautifulElement"></span>
       <span>是</span>
    </label>
    <label>
      <input type="radio"  value="1" onChange={this.changeYesProfessional}  checked={this.state.yesProfessional==="1"}/>
      <span className="radioBeautifulElement"></span>
      <span>否</span>
   </label>
   </div>

   <div className="choiceItem clear">
     <p>(二).为学业?</p>
     <label className="label">
       <input type="radio" value="0"  onChange={this.changeIsForStudy} checked={this.state.isForStudy==="0"}/>
       <span className="radioBeautifulElement"></span>
       <span>是</span>
    </label>
    <label>
      <input type="radio" value="1"   onChange={this.changeIsForStudy} checked={this.state.isForStudy==="1"}/>
      <span className="radioBeautifulElement"></span>
      <span>否</span>
   </label>
   </div>


   <div className="choiceItem clear">
     <p>(三).送谁?</p>
     <label className="label">
       <input type="radio" value="0" onChange={this.changeWhoGetTheMusicGift} checked={this.state.whoGetTheMusicGift==="0"}/>
       <span className="radioBeautifulElement"></span>
       <span>朋友</span>
    </label>
    <label>
      <input type="radio"  value="1" onChange={this.changeWhoGetTheMusicGift} checked={this.state.whoGetTheMusicGift==="1"}/>
      <span className="radioBeautifulElement"></span>
      <span>亲人</span>
   </label>
    <label>
      <input type="radio"  value="2" onChange={this.changeWhoGetTheMusicGift} checked={this.state.whoGetTheMusicGift==="2"}/>
      <span className="radioBeautifulElement"></span>
      <span>爱人</span>
   </label>
    <label>
      <input type="radio"  value="3" onChange={this.changeWhoGetTheMusicGift} checked={this.state.whoGetTheMusicGift==="3"}/>
      <span className="radioBeautifulElement"></span>
      <span>暗恋对象</span>
   </label>
   </div>

   <div className="choiceItem clear">
     <p>(四).选择服务类型?</p>
     <label className="label">
       <input type="radio" onChange={this.changeChoiceYouService} value="0" checked={this.state.choiceYouService==="0"}/>
       <span className="radioBeautifulElement"></span>
       <span>原创midi</span>
    </label>
    <label>
      <input type="radio"  onChange={this.changeChoiceYouService} value="1" checked={this.state.choiceYouService==="1"}/>
      <span className="radioBeautifulElement"></span>
      <span>原创词曲</span>
   </label>
     <label className="label">
       <input type="radio" onChange={this.changeChoiceYouService} value="2" checked={this.state.choiceYouService==="2"}/>
       <span className="radioBeautifulElement"></span>
       <span>混音配音</span>
    </label>
    <label>
      <input type="radio"  onChange={this.changeChoiceYouService} value="3" checked={this.state.choiceYouService==="3"}/>
      <span className="radioBeautifulElement"></span>
      <span>录音棚体验</span>
   </label>
     <label className="label">
       <input type="radio" onChange={this.changeChoiceYouService} value="4" checked={this.state.choiceYouService==="4"}/>
       <span className="radioBeautifulElement"></span>
       <span>艺术课程咨询</span>
    </label>
    <label>
      <input type="radio"  onChange={this.changeChoiceYouService} value="5" checked={this.state.choiceYouService==="5"}/>
      <span className="radioBeautifulElement"></span>
      <span>乐器租赁</span>
   </label>
   </div>


   <div className="choiceItem clear">
     <p>(五).联系方式(电话,QQ,微信均可)</p>
     <input placeholder="请输入您的联系方式"  onChange={this.chanegContactWay} className="contact"/>
   </div>

   <div className="buttonWrap choiceItem">
      <input type="button" value="提交信息" onClick={this.postMusicOrder} style={{'display':this.state.isLogin?'inline-block':'none'}} />
   </div>
   </div>
</div>
</div>

			)

	}
}
export default Musicdo;
