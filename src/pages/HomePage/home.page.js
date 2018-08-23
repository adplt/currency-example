import React, {Component} from 'react';
import PropTypes from 'prop-types';
import logo from '../../logo.svg';

export default class HomePage extends Component {

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
      <div className={'App'}>
        <header className={'App-header'}>
          <img src={logo} className={'App-logo'} alt={'logo'} />
          <h1 className={'App-title'}>{'Welcome to React'}</h1>
        </header>
        <p className={'App-intro'}>
          {'To get started, edit '}<code>{'src/App.js'}</code>{' and save to reload.'}
        </p>
      </div>
    );
  }
}
