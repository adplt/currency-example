import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {noop} from 'lodash';

export default class ButtonComponent extends PureComponent {

  static propTypes = {
    // props for button component
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    buttonName: PropTypes.string,
    buttonStyle: PropTypes.object,
  };

  onChange = (value, InputName) => {
    const state = this.state;
    state[InputName] = value;
    this.setState(state);
  }

  render () {
    const {
      disabled = false,
      onClick = noop,
      buttonName = '',
      buttonStyle = {},
    } = this.props;
    return (
      <button
        type={'submit'}
        disabled={disabled}
        onClick={onClick}
        className={'btn btn-primary text-center'}
        style={buttonStyle}>
        {
          buttonName
        }
      </button>
    );
  }
}
