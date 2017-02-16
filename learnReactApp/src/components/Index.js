import React,{Component,propsTypes} from 'react'
import { Carousel } from 'antd';
import IndexCss from "../css/Index.scss"
import imageUrls from "../config/imagesUrls.js";
class Index extends Component{
	constructor(props){
		super(props);
		this.state={
			indexImgUrl:imageUrls.carouselFigure
		}

	}
	render(){

		return (
			<div>
		 <Carousel autoplay>
		 {
		 	this.state.indexImgUrl.map((item,index)=>{
		 		return (
              <div key={index}><h3 className="imgShow"><img src={item} alt=""/></h3></div>
		 			)
		 	})
		 }
         </Carousel>

<div className="ourTeam">
  <h2 className="choiceReasonTitle">
    选择小乌龟的理由
  </h2>
<div>
  <h2>
    因为专业
  </h2>
  <p>工作室团队成员皆为音乐学院科班生，分别在电子音乐系，钢琴系，声乐系，儿童教育皆有两年以上的研究。我们的产品和服务，会因为专业而得到质量保障。</p>
</div>
<div>
    <h2>
    因为懂得
  </h2>
  <p>很多时候，你只需要一个眼神一句问候，我便能知道你所想、所要。除了儿童心理学，教育心理学等刻意训练处的专业洞察力，有些懂得更是因为我们有着相同的过往。如果您是本院学生，除了获取想要的作品外，通过小乌龟，您还可以获得更多考试，学位等相关建议。</p>
</div>
<div>
    <h2>
    因为热爱
  </h2>
  <p>我们坚信，有爱的人会活得用心，他们做起事来也格外专注和谨慎。我们也都怀着热爱的心，在倾听用户的声音，在用心血与爱弹奏每个音符。在小乌龟，不只有音乐，更有生活与朋友，乐趣与美好。</p>
</div>
  </div>

  </div>

			)
	}

}
export default Index;