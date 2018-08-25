import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {noop} from 'lodash';
import View from '../ViewComponent/view.component';

export default class IconComponent extends PureComponent {

  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
  }

  render () {
    const {
      className = '',
      style = {},
      onClick = noop,
    } = this.props;
    return (
      <View
        onClick={onClick}>
        <i
          className={className}
          style={style}
        />
      </View>
    );
  }
}
