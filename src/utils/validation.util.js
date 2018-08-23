import {
  isEmpty,
  each,
} from 'lodash';

export const validateRequiredFields = (values = {}, fields = []) => {
  const errors = {};
  each(fields, ((field) => {
    if ((!values[field] && values[field] !== 0) || isEmpty(values[field])) {
      errors[field] = field + ' tidak boleh kosong';
    }
  }));
  return errors;
};
