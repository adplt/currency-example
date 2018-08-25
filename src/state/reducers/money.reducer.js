import {
  SET_INITIAL_MONEY_AMOUNT,
} from '../actions/money.action';

const money = (state = 10, action) => {
  switch (action.type) {
  case SET_INITIAL_MONEY_AMOUNT: {
    return action.payload;
  }
  default:
    return state;
  }
};

export default money;
