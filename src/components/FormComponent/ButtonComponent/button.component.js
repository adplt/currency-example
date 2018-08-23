import React, {PureComponent} from 'react';
import View from '../../components/View/view.component';
import PropTypes from 'prop-types';

export default class ButtonComponent extends PureComponent {

  static propTypes = {
    history: PropTypes.object,
    handleSubmit: PropTypes.func,
    initValue: PropTypes.func,
    submitting: PropTypes.bool,
    invalid: PropTypes.bool,
  };

  onChange = (value, InputName) => {
    const state = this.state;
    state[InputName] = value;
    this.setState(state);
  }

  render () {
    return (
      <View />
    );
  }
}
