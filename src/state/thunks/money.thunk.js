import * as moneyActions from '../actions/money.action';

export const setInitialMoneyThunk = (payload) => (dispatch) =>
  dispatch(moneyActions.setInitialMoneyAmount(payload));
