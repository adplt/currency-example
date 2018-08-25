import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {appRoutes} from '../routes/index';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class Index extends Component {

  static propTypes = {
    history: PropTypes.object,
    showLoader: PropTypes.bool,
    logout: PropTypes.func,
    user: PropTypes.string,
  };

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

export const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
