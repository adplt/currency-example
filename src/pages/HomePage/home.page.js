import React, {Component} from 'react';
import PropTypes from 'prop-types';
import View from '../../components/ViewComponent/view.component';
import {Button, Select} from '../../components/FormComponent';
import {noop, isEmpty} from 'lodash';
import {fields} from '../../constants/home.constant';
import {Field} from 'redux-form';
import Card from '../../components/CardComponent/card.component';
import currentLanguage from '../../config/language';
import styles from './home.style';
import Header from '../../components/HeaderComponent/header.component';

export default class HomePage extends Component {

  static propTypes = {
    history: PropTypes.object,
    handleSubmit: PropTypes.func,
    submitting: PropTypes.bool,
    invalid: PropTypes.bool,
    currencyType: PropTypes.array,
    getCurrencyRate: PropTypes.func,
    changeValue: PropTypes.func,
    currencyList: PropTypes.array,
    addCurrencyList: PropTypes.func,
    removeCurrencyList: PropTypes.func,
    money: PropTypes.number,
  }

  state = {
    showAddForm: false,
    currencyListTemp: [], // using state so the page will re-render and display value updated
  }

  componentWillMount () {
    const {
      getCurrencyRate = noop,
      currencyList = [],
      currencyType = [],
    } = this.props;
    if (isEmpty(currencyType)) getCurrencyRate();
    this.onChange('currencyListTemp', currencyList);
  }

  componentWillReceiveProps (newProps) {
    const {currencyList = []} = newProps;
    this.onChange('currencyListTemp', currencyList);
  }

  onChange = (InputName, value) => {
    const state = this.state;
    state[InputName] = value;
    this.setState(state);
  }

  changeValue = (field, value) => {
    const {changeValue = noop} = this.props;
    changeValue(field, value);
  }

  onClikDelete = (value) => () => {
    const {removeCurrencyList = noop} = this.props;
    removeCurrencyList(value);
  }

  showAddForm = () => {
    this.onChange('showAddForm', true);
  }

  submitCurrency = () => {
    const {handleSubmit = noop} = this.props;
    this.onChange('showAddForm', false);
    handleSubmit();
  }

  render () {
    const {
      currencyType = [],
      submitting,
      invalid,
      money = 0,
    } = this.props;
    const {
      showAddForm,
      currencyListTemp = [],
    } = this.state;
    const {
      language,
    } = currentLanguage;
    return (
      <View
        className={'container'}>
        <View
          className={'row'}>
          <View
            className={'col-sm'} />
          <View
            className={'col-sm'}>
            <Header
              money={money}
            />
            {
              currencyListTemp.map((currency, key) => (
                <Card
                  key={key}
                  data={currency}
                  onClikDelete={this.onClikDelete(currency)}
                  money={money}
                />
              ))
            }
            {
              showAddForm ? (
                <View
                  className={'text-center'}
                  style={styles.formAddCurrency}>
                  <View
                    className={'row'}
                    style={styles.rowItems}>
                    <View
                      style={styles.halfWidth}>
                      <Field
                        name={fields.CURRENCY_TYPE}
                        component={Select}
                        data={currencyType}
                        type={'select'}
                        id={'exampleSelect'}
                        selectStyle={styles.currencyType}
                        input={{
                          onChange: (value) => this.changeValue(fields.CURRENCY_TYPE, value),
                        }}
                      />
                    </View>
                    <View
                      style={styles.halfWidth}>
                      <Button
                        buttonName={'Submit'}
                        onClick={this.submitCurrency}
                        disabled={invalid || submitting}
                        buttonStyle={styles.submitCurrency}
                      />
                    </View>
                  </View>
                </View>
              ) : (
                <View
                  className={'text-center'}
                  style={styles.addMoreCurrency}>
                  <Button
                    buttonName={language.HOME__ADD_MORE_CURRENCY}
                    onClick={this.showAddForm}
                  />
                </View>
              )
            }
          </View>
          <View
            className={'col-sm'}/>
        </View>
      </View>
    );
  }
}
