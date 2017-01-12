import React, { Component} from 'react';
import classnames from 'classnames';

class TabPane extends Component {

  render() {
    const {isActive, children } = this.props;

    const classes = classnames({
      ['tabs-panel']: true,
      ['tabs-active']: isActive,
    });

    return (
      <div className={classes}>
        {children}
      </div>
    );
  }
}

export default TabPane;
