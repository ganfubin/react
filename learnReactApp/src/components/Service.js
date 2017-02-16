import React,{Component} from 'react'
import ServiceCss from "../css/Service.scss"
import ImageUrls from "../config/imagesUrls.js";
class Service extends Component{
	constructor(props){
		super(props);
		this.state={
				serviceList:[
				{
					serviceName:"产品类",
					serviceSingleList:[
					     {productName:"Midi音乐制作",productPrice:"(时长小于3分钟,60rmb/首,大于3分钟90rmb/首,考试包过,不过退款,约定时间后的1天之内交货)",backgroundUrl:ImageUrls.serviceBackground[0]},
					     {productName:"音频后期处理",productPrice:"录音,配音,混音,剪辑(价格同上)",backgroundUrl:ImageUrls.serviceBackground[1]},
					     {productName:"歌曲创作",productPrice:"(客服咨询定价)",backgroundUrl:ImageUrls.serviceBackground[2]},
					]

				},
				{
					serviceName:"服务类",
					serviceSingleList:[
					     {productName:"录音棚体验",productPrice:"(30rmb/小时)",backgroundUrl:ImageUrls.serviceBackground[3]},
					     {productName:"乐器租赁",productPrice:"(20rmb/星期,需缴纳成本价押金)",backgroundUrl:ImageUrls.serviceBackground[4]},
					     {productName:"吉他培训",productPrice:"(20rmb/40分钟)",backgroundUrl:ImageUrls.serviceBackground[5]},
					]					
				},

				{
					serviceName:"问题类",
					serviceSingleList:[
					     {productName:"付费方式",productPrice:"(支持线上下单,支付宝微信网银和线下付款)",backgroundUrl:ImageUrls.serviceBackground[6]},
					     {productName:"原创音乐问题",productPrice:"(我们需要做一些沟通进一步了解定制者的心理诉求,初步作词和编曲之后再询问是否满意度,不满意退半额款并停止继续创作)",backgroundUrl:ImageUrls.serviceBackground[6]},
					     {productName:"其他问题",productPrice:"点击下方联系方式在线咨询",backgroundUrl:ImageUrls.serviceBackground[6]},
					]					
				}

				]
		}

	}
	render(){
	return (



       <div>
         {
         	this.state.serviceList.map((item,index)=>{
                 return (
                 	<div className="productClass" key={index}>
		                  <h2>{item.serviceName}</h2>
		                  <div className="mainProductClass">
		                  {

                            item.serviceSingleList.map((innerItem,innerIndex)=>{
		                  		return (
		                  					<div className="serviceClass" key={innerIndex} style={{'backgroundImage':'url('+innerItem.backgroundUrl+')'}}>
                                               <span className="wordServer">{innerItem.productName}</span><span className="rmb">{innerItem.productPrice}</span>
		                  					</div>
		                  			)

		                  	})

		                  }

		                  </div>
                 	</div>


                 	)

         	})
         }

       </div>

			)

	}
}
export default Service;