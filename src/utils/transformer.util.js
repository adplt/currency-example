import {result, isEmpty} from 'lodash';
import currentLanguage from '../config/language';

export const currencyTypeFilter = (payload) => {
  let currencyArray = [];
  for (let currency in payload) currencyArray.push({label: currency}); // using label for select dropdown component
  return currencyArray;
};

export const addOrRemoveCurrency = (data = [], keyword, type) => {
  const {language} = currentLanguage;
  let flag = false;
  let newData = {};
  switch (type) {
  case 'add':
    if (isEmpty(data)) newData = { // define new data when entering matched validation
      currencyType: result(keyword, 'currencyType', ''),
      currencyDesc: language['CURRENCY__' + result(keyword, 'currencyType', '') + '_DESCRIPTION'],
      currencyRateByDollar: result(keyword, 'currencyRateByDollar', ''),
    };
    else {
      data.filter((value) => {
        flag = result(value, 'currencyType', '') === result(keyword, 'currencyType', '');
      });
      if (!flag) {
        newData = { // define new data when entering matched validation
          currencyType: result(keyword, 'currencyType', ''),
          currencyDesc: language['CURRENCY__' + result(keyword, 'currencyType', '') + '_DESCRIPTION'],
          currencyRateByDollar: result(keyword, 'currencyRateByDollar', ''),
        };
      }
    }
    return newData;
  case 'remove':
    return data.filter((value) => result(value, 'currencyType', '') !== result(keyword, 'currencyType', ''));
  default:
    return data;
  }
};

export const calculateAmount = (amount = 0, currencyRate = 0) => {
  const replaceRegex = /(\d)(?=(\d{3})+(?!\d))/g;
  return Number(amount * currencyRate).toFixed(2).replace(replaceRegex, '$1,');
};
