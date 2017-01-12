import React, { Component, cloneElement } from 'react';

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

export default TabContent;
