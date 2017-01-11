import React,{Component} from 'react';
import "./css/style.scss";
import Count from "./CountNumber";

export default class TabIndex extends Component{
    constructor(props){
      super(props);
    }
    render(){
        return (
            <div id="tab-demo" role="tablist">
            {/*导航区*/}
            <Count></Count>
                <div className="tabs-bar" role="tablist">
                  <ul className="tabs-nav">
                    <li role="tab" className="tabs-tab">Tab1</li>
                    <li role="tab" className="tabs-tab">Tab2</li>
                    <li role="tab" className="tabs-tab">Tab3</li>
                  </ul>
                </div>
            {/*内容区*/}
                <div className="tabs-content">
                   <div role="tabpanel" className="tabs-panel">第1个Tab里的内容1</div>
                   <div role="tabpanel" className="tabs-panel">第2个Tab里的内容2</div>
                   <div role="tabpanel" className="tabs-panel">第3个Tab里的内容3</div>
                </div>
            </div>
        )
    }
}