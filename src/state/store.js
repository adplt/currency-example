import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import rootReducer from './reducers/index';

const enhancers = [];
const devToolsExtension = window.devToolsExtension;
if (typeof devToolsExtension === 'function') {
  enhancers.push(devToolsExtension());
}

const configureStore = () => {
  const store = createStore(
    rootReducer,
    {},
    compose(applyMiddleware(thunk, promise), ...enhancers)
  );
  return store;
};

export default configureStore();
