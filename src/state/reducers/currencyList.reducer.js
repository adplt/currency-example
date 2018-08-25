import {
  ADD_TO_CURRENCY_LIST,
  REMOVE_FROM_CURRENCY_LIST,
} from '../actions/currency.action';
import {addOrRemoveCurrency} from '../../utils/transformer.util';
import {isEmpty} from 'lodash';

const defaultState = [{
  currencyType: 'IDR',
  currencyDesc: 'Indonesian Rupiah',
  currencyRateByDollar: 14410.45,
}, {
  currencyType: 'EUR',
  currencyDesc: 'Euro',
  currencyRateByDollar: 0.8569,
}, {
  currencyType: 'GBP',
  currencyDesc: 'British Pound',
  currencyRateByDollar: 0.7589,
}];

const currencyList = (state = [], action) => {
  switch (action.type) {
  case ADD_TO_CURRENCY_LIST: {
    const data = addOrRemoveCurrency(state, action.payload, 'add');
    return !isEmpty(data) ? [...state, addOrRemoveCurrency(state, action.payload, 'add')] : state;
  }
  case REMOVE_FROM_CURRENCY_LIST: {
    return addOrRemoveCurrency(state, action.payload, 'remove');
  }
  default:
    return state;
  }
};

export default currencyList;
