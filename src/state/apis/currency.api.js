import HTTP from '../../utils/http.util';

export const getCurrencyRateApi = (dynamicPath) => HTTP.GET('GET_CURRENCY_RATE', {}, dynamicPath);
