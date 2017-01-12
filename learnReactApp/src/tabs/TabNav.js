import React, { Component } from 'react';
import classnames from 'classnames';

class TabNav extends Component {

  getTabs() {
    const { panels,activeIndex} = this.props;

    return React.Children.map(panels, (child) => {

      const order = parseInt(child.props.order, 10);

      let classes = classnames({
        ['tabs-tab']: true,
        ['tabs-active']: activeIndex === order
      });

      let events = {};
      if (!child.props.disabled) {
        events = {
          onClick: this.props.onTabClick.bind(this, order),
        };
      }

      return (
        <li
          {...events} className={classes} key={order}
        >
          {child.props.tab}
        </li>
      );
    });
  }

  render() {

    return (
      <div className="tabs-bar">
        <ul className="tabs-nav">
          {this.getTabs()}
        </ul>
      </div>
    );
  }
}

export default TabNav;
