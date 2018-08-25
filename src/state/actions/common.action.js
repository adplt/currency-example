import {createAction} from 'redux-actions';

export const SET_HISTORY = 'SET_HISTORY';

export const SET_LANGUAGE = 'SET_LANGUAGE';


/* ***************************************************************************** */


export const setHistory = createAction(SET_HISTORY);

export const setLanguage = createAction(SET_LANGUAGE);
