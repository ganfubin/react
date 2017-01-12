import React, { Component,  cloneElement } from 'react';
import ReactDOM from 'react-dom';
import "./tabs/tabs.scss";
class Tabs extends Component {
  constructor(props) {
    super(props);
    const currProps = this.props;
    this.handleTabClick = this.handleTabClick.bind(this);
    let activeIndex;
    activeIndex = currProps.defaultActiveIndex;
    this.state = {
      activeIndex,
      prevIndex: activeIndex,
    };
  }
  handleTabClick(activeIndex) {
    const prevIndex = this.state.activeIndex;
      this.setState({
        activeIndex,
        prevIndex,
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
  getTabs() {
    const { panels} = this.props;
    return React.Children.map(panels, (child) => {
      const order =+child.props.order;
      return (
        <li onClick={this.props.onTabClick.bind(this, order)} className={ this.props.activeIndex=== order? 'tabs-active tabs-tab' : 'tabs-tab'} >
          {child.props.tab}
        </li>
      );
    });
  }
  render() {

    return (
      <div className="tabs-bar">
        <ul className="tabs-nav clear">
          {this.getTabs()}
        </ul>
      </div>
    );
  }
}



class TabContent extends Component {
  getTabPanes() {
    const { activeIndex, panels } = this.props;
    return React.Children.map(panels, (child) => {
      const order = parseInt(child.props.order, 10);
      const isActive = activeIndex === order;

      return React.cloneElement(child, {
        isActive,
        children: child.props.children,
      });
    });
  }

  render() {
    return (
      <div className="tabs-content">
        {this.getTabPanes()}
      </div>
    );
  }
}

class TabPane extends Component {
  render() {
    return (
      <div className={this.props.isActive?'tabs-panel tabs-active':'tabs-panel'}>
        {this.props.children}
      </div>
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
