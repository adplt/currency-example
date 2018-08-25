import {SET_CURRENCY_RATE} from '../actions/currency.action';

const currencyRate = (state = {}, action) => {
  switch (action.type) {
  case SET_CURRENCY_RATE: {
    return action.payload;
  }
  default:
    return state;
  }
};

export default currencyRate;
