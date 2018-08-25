import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {appRoutes} from './routes/index';
import PropTypes from 'prop-types';
import {
  setHistoryThunk,
  setCurrentLanguageThunk,
} from './state/thunks/common.thunk';
import {noop} from 'lodash';
import {connect} from 'react-redux';

class App extends Component {

  static propTypes = {
    history: PropTypes.object,
    setHistory: PropTypes.func,
    setCurrentLanguage: PropTypes.func,
  };

  UNSAFE_componentWillMount () {
    const {
      setHistory = noop,
      history,
      setCurrentLanguage = noop,
    } = this.props;
    setHistory(history); // history used for routing to another page, proptypes history provided by react-router v4
    setCurrentLanguage('en'); // initialize language
  }

  render () {
    return (
      <Switch>
        {
          appRoutes.map((prop, key) => {
            if (prop.redirect) // if there's any redirect path
              return (
                <Redirect
                  to={prop.pathTo}
                  key={key} />
              );
            else
              return (
                <Route
                  path={prop.path}
                  component={prop.component}
                  key={key} />
              );
          })
        }
      </Switch>
    );
  }
}

const mapStateToProps = () => ({});

export const mapDispatchToProps = (dispatch) => ({
  setHistory: (history) => dispatch(setHistoryThunk(history)),
  setCurrentLanguage: (languageId) => dispatch(setCurrentLanguageThunk(languageId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
