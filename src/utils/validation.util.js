import {
  isEmpty,
  each,
  result,
} from 'lodash';
import currentLanguage from '../config/language';

export const validateRequiredFields = (values = {}, fields = []) => {
  const errors = {};
  const {language} = currentLanguage;
  each(fields, ((field) => {
    if (
      (!values[field] && values[field] !== 0) ||
      isEmpty(values[field]) ||
      values[field] === 'Choose One'
    ) {
      errors[field] = `${field} ${language.ERROR_MESSAGE__MUST_BE_FILLED}`;
    }
  }));
  return errors;
};

export const validateDuplicateCurrency = (fields = [], keyword, key) => {
  const errors = {};
  const {language} = currentLanguage;
  each(fields, (field) => {
    if (result(field, 'currencyType', '') === result(keyword, 'currencyType', ''))
      errors[key] = `${key} ${language.ERROR_MESSAGE__ALREADY_ADDED_TO_LIST}`;
  });
  return errors;
};
