import * as currencyApis from '../apis/currency.api';
import * as currencyActions from '../actions/currency.action';
import {result} from 'lodash';
import {destroy} from 'redux-form';

export const getCurrencyRateThunk = () => (dispatch) =>
  currencyApis.getCurrencyRateApi('?base=USD')
    .then((res) => {
      dispatch(currencyActions.setCurrencyRate(result(res, 'rates', {})));
    })
    .catch((error) => {
      // failed to get response
      // eslint-disable-next-line
      console.log('error: ', error);
    });

export const addCurrencyListThunk = (payload) => (dispatch, getState) => {
  const {currencyRate} = getState();
  dispatch(currencyActions.addToCurrencyList({
    ...payload,
    currencyRateByDollar: currencyRate[result(payload, 'currencyType', '')]
  }));
  dispatch(destroy('HomeForm'));
};

export const removeCurrencyListThunk = (payload) => (dispatch) =>
  dispatch(currencyActions.removeFromCurrencyList(payload));
