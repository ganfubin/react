import React, { Component} from 'react';
import styles from './tabs.scss';
import TabNav from './TabNav';
import TabContent from './TabContent';

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

    if (this.state.activeIndex !== activeIndex &&
        'defaultActiveIndex' in this.props) {
      this.setState({
        activeIndex,
        prevIndex,
      });

    }
  }



  render() {
    return (
      <div>
        <TabNav key="tabBar"  onTabClick={this.handleTabClick} panels={this.props.children} activeIndex={this.state.activeIndex} />
        <TabContent key="tabcontent" classPrefix="tabs" activeIndex={this.state.activeIndex} panels={this.props.children}/>
      </div>
    );
  }
}

export default Tabs;
