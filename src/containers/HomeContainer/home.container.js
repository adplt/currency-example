import {connect} from 'react-redux';
import HomePage from '../../pages/HomePage/home.page';
import {result, noop} from 'lodash';
import {reduxForm, change} from 'redux-form';
import {
  validateRequiredFields,
  validateDuplicateCurrency,
} from '../../utils/validation.util';
import {
  getCurrencyRateThunk,
  addCurrencyListThunk,
  removeCurrencyListThunk,
} from '../../state/thunks/currency.thunk';
import {currencyTypeFilter} from '../../utils/transformer.util';
import {fields} from '../../constants/home.constant';

const formConfig = {
  form: 'HomeForm',
  validate: (values, {currencyList = []}) => {
    const errors = {
      ...validateRequiredFields(values, [
        fields.CURRENCY_TYPE,
      ]),
      ...validateDuplicateCurrency(currencyList, values, fields.CURRENCY_TYPE),
    };
    return errors;
  },
  initialValues: {
    currencyType: '',
  },
  onSubmit: (values, dispatch, {addCurrencyList = noop}) => {
    addCurrencyList(values);
  }
};

const HomeForm = reduxForm(formConfig)(HomePage);

const mapStateToProps = (state) => ({
  currencyType: currencyTypeFilter(result(state, 'currencyRate', {})),
  currencyList: result(state, 'currencyList', []),
  money: result(state, 'money', 0),
});

export const mapDispatchToProps = (dispatch) => ({
  getCurrencyRate: () => dispatch(getCurrencyRateThunk()),
  addCurrencyToList: () => dispatch(addCurrencyListThunk()),
  changeValue: (field, value) => dispatch(change('HomeForm', field, value)),
  addCurrencyList: (payload) => dispatch(addCurrencyListThunk(payload)),
  removeCurrencyList: (payload) => dispatch(removeCurrencyListThunk(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeForm);
