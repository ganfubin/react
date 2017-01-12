import React, { Component, PropTypes, cloneElement } from 'react';
import ReactDOM from 'react-dom';
import Tabs from './tabs/Tabs';
import TabPane from './tabs/TabPane';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }
  render() {
    return (
      <div>
        <Tabs defaultActiveIndex={this.state.activeIndex} className="tabs-bar">
          <TabPane order="0" tab={'选项卡 1'}>第一个 Tab 里的内容</TabPane>
          <TabPane order="1" tab={'选项卡 2'}>第二个 Tab 里的内容</TabPane>
          <TabPane order="2" tab={'选项卡 3'}>第三个 Tab 里的内容</TabPane>
        </Tabs>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
