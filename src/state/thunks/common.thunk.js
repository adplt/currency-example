import * as commonActions from '../actions/common.action';
import language from '../../config/language/index';

export const setHistoryThunk = (payload) => (dispatch) => {
  dispatch(commonActions.setHistory(payload));
};

export const setCurrentLanguageThunk = (languageId) => (dispatch) => {
  if (!['id', 'en'].includes(languageId)) {
    languageId = 'id';
  }
  language.setCurrentLang(languageId);
  dispatch(commonActions.setLanguage(languageId));
};
