import React,{Component} from 'react'
import MusicDemoCss from "../css/MusicDemo.scss"

import Music from "../config/mediaMp3.js";
import imagesUrls from "../config/imagesUrls.js";


class MusicDemo extends Component{
	constructor(props){
		super(props);
		this.state={
				//服务器音频播放地址
				musicSourceUrlList:Music.listMusic,
				//背景图切换地址
				backgroundImgUrlValue:{
  	               musicIsPlaying:imagesUrls.musicIsPlaying,
  	               musicIsStoped:imagesUrls.musicIsStoped,
  	               buttonOn:imagesUrls.buttonOn,
  	               buttonOff:imagesUrls.buttonOff
         }			

		}

	}
	playMusic(event){
		let musicPlayWrap=event.target.parentNode;//包裹播放的容器
		let musicAudio=musicPlayWrap.getElementsByTagName('audio')[0];//音频资源
		let musicdbgDom=musicPlayWrap.getElementsByTagName('span')[0];//磁带背景
        let bufferTitleDom=musicPlayWrap.getElementsByTagName('span')[1];//缓冲提示

		if(musicAudio.paused){
			musicAudio.play();
				      bufferTitleDom.style.display="block";
				      setTimeout(()=>{
				      	bufferTitleDom.style.display="none";
				      },1000);//缓冲提示

				      musicdbgDom.style.backgroundImage="url("+this.state.backgroundImgUrlValue.musicIsPlaying+")";//磁带转动
				      event.target.style.backgroundImage="url("+this.state.backgroundImgUrlValue.buttonOn+")";//开关切换

		}else{
			musicAudio.pause();
			musicdbgDom.style.backgroundImage="url("+this.state.backgroundImgUrlValue.musicIsStoped+")";
		    event.target.style.backgroundImage="url("+this.state.backgroundImgUrlValue.buttonOff+")";
		}


	}	
	render(){
		return (
    <div id="mainDemo">
        <div id="musicDemo">
            <ul id="demoList">
            {
            	this.state.musicSourceUrlList.map((musicItem,index)=>{
            		return (
                        <li key={index}>
                        	<span className="musicdbg"  style={{'backgroundImage':'url('+this.state.backgroundImgUrlValue.musicIsStoped+')'}}></span>
                            <audio ref="sourceMusic">
                                <source src={musicItem.musicUrl} />
                            </audio>
                            <a href="javascript:void(0);">{musicItem.muscititle}</a>
                            <span className="bufferTitle" ref="bufferTitle">请稍候,音乐缓冲完毕后会自动播放......</span>
                            <span className="musicOnoff" onClick={this.playMusic.bind(this)} data={index}></span>
                        </li>

            			)
            	})
            }

            </ul>
        </div> 
    </div>


			)

	}
}
export default MusicDemo;