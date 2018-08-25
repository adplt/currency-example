import {createAction} from 'redux-actions';

export const SET_CURRENCY_RATE = 'SET_CURRENCY_RATE';

export const ADD_TO_CURRENCY_LIST = 'ADD_TO_CURRENCY_LIST';
export const REMOVE_FROM_CURRENCY_LIST = 'REMOVE_FROM_CURRENCY_LIST';


/* ***************************************************************************** */


export const setCurrencyRate = createAction(SET_CURRENCY_RATE);

export const addToCurrencyList = createAction(ADD_TO_CURRENCY_LIST);
export const removeFromCurrencyList = createAction(REMOVE_FROM_CURRENCY_LIST);
