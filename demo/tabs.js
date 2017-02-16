import React, { Component,  cloneElement } from 'react';

import ReactDOM from 'react-dom';

import "./tabs/tabs.scss";

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.handleTabClick = this.handleTabClick.bind(this);

    this.state = {
      activeIndex:this.props.defaultActiveIndex//默认的激活状态
    };
  }
  
  handleTabClick(order) {//此方法用于更新state值
   //order为li传入的oreder值
      this.setState({
        activeIndex:order
      });
  
}

  render() {

    return (
      <div>
        <TabNav key="tabBar"  onTabClick={this.handleTabClick} panels={this.props.children} activeIndex={this.state.activeIndex} />
        <TabContent key="tabcontent"  activeIndex={this.state.activeIndex} panels={this.props.children}/>
      </div>
    );
  }
}

class TabNav extends Component {

  render() {

    var domRender=React.Children.map(this.props.panels, (child) => {
      return (
        <li onClick={this.props.onTabClick.bind(this, +child.props.order)} className={ this.props.activeIndex=== +child.props.order ? 'tabs-active tabs-tab' : 'tabs-tab'} >
          {child.props.tab}
        </li>
      );
    });

    
    return (
      <div className="tabs-bar">
        <ul className="tabs-nav clear">
        {domRender}
        </ul>
      </div>
    );
  }
}



class TabContent extends Component {

  render() {

     var domRender=React.Children.map(this.props.panels, (child) => {
    
      return React.cloneElement(child, {
        isActive:this.props.activeIndex === +child.props.order,
        children: child.props.children
      });
      
    });

    return (
      <div className="tabs-content">
        {domRender}
      </div>
    );
  }
}

class TabPane extends Component {
  render() {
    console.log(this.props);
    return (
          <div className={this.props.isActive?'tabs-active':'tabs-panel'}>{this.props.children}</div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <div>
        <Tabs defaultActiveIndex={0} className="tabs-bar">
          <TabPane order="0" tab={'选项卡 1'}>第一个 Tab 里的内容</TabPane>
          <TabPane order="1" tab={'选项卡 2'}>第二个 Tab 里的内容</TabPane>
          <TabPane order="2" tab={'选项卡 3'}>第三个 Tab 里的内容</TabPane>
        </Tabs>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));






