import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';
import currencyRateReducer from './currencyRate.reducer';
import moneyReducer from './money.reducer';
import currencyListReducer from './currencyList.reducer';

export default combineReducers({
  form: formReducer,
  routing: routerReducer,
  currencyRate: currencyRateReducer,
  money: moneyReducer,
  currencyList: currencyListReducer,
});
