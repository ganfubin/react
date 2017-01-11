import React,{Component} from 'react';
class Tabs extends Component{
    render(){
        return (
            <div id="tab-demo">
            {/*选项卡头部*/}
              <div className="tabs-bar" role="tablist">
                <ul className="tabs-nav">
                  <li role="tab" className="tabs-tab">Tabs1</li>
                  <li role="tab" className="tabs-tab">Tabs2</li>
                  <li role="tab" className="tabs-tab">Tabs3</li>
                </ul>
              </div>
            {/*选项卡内容*/}
              <div className="tabs-content">
                 <div role="tabpanel" className="tabs-panel">第2个tab里的内容</div>
                 <div role="tabpanel" className="tabs-panel">第3个tab里的内容</div>
                 <div role="tabpanel" className="tabs-panel">第1个tab里的内容</div>
              </div>

            </div>
        )
    }
}
export default Tabs;