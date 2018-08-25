import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './state/store';
import {indexRoutes} from './routes/index';
import './index.css';
import './App.css';
import './assets/css/bootstrap.min.css';

injectTapEventPlugin();

ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <Switch>
        {
          indexRoutes.map((prop, key) => (
            <Route
              key={key}
              path={prop.path}
              component={prop.component}
            />
          ))
        }
      </Switch>
    </HashRouter>
  </Provider>
), document.getElementById('root'));

registerServiceWorker();
