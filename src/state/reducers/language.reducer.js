import {SET_LANGUAGE} from '../actions/currency.action';

const language = (state = {id: 'id'}, action) => {
  switch (action.type) {
  case SET_LANGUAGE: {
    return {
      id: action.payload,
    };
  }
  default:
    return state;
  }
};

export default language;
