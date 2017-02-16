import React,{Component} from 'react'
import {render} from 'react-dom'
import {Router,Route,browserHistory,IndexRoute,Link} from 'react-router'

import normalizeCss from './css/normalize.css'

//公用顶部和底部
import CommonTop from "./components/CommonTop.js"
import CommonBottom from "./components/CommonBottom.js"

import Index from "./components/Index.js"
import Service from "./components/Service.js"
import MusicDemo from "./components/MusicDemo.js"
import Musicdo from "./components/Musicdo.js"
import AboutUs from "./components/AboutUs.js"
import Login from "./components/Login.js"
import SignUp from "./components/SignUp.js"

class App extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
            <div>
               <div>
                  <CommonTop></CommonTop>
                  <div className="router-view">
                    {this.props.children}
                  </div>
                  <CommonBottom></CommonBottom>
               </div>
            </div>
			)
	}
}
//路由配置
const routes = {
  path: '/',
  component: App,
  indexRoute:{component:Index},
  childRoutes: [
    { path: 'Index', component: Index },
    { path: 'Service', component: Service },
    { path: 'MusicDemo', component: MusicDemo },
    { path: 'Musicdo', component: Musicdo },
    { path: 'AboutUs', component: AboutUs },
    { path: 'Login', component: Login },
    { path: 'SignUp', component: SignUp }
  ]
 }
render(<Router routes={routes} history={browserHistory}/>,document.getElementById('root'))