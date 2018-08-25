import React, {Component} from 'react';
import View from '../ViewComponent/view.component';
import Icon from '../IconComponent/icon.component';
import PropTypes from 'prop-types';
import {result, noop} from 'lodash';
import styles from './card.style';
import {calculateAmount} from '../../utils/transformer.util';
import currentLanguage from '../../config/language';

export default class CardComponent extends Component {

  static propTypes = {
    data: PropTypes.object,
    onClikDelete: PropTypes.func,
    money: PropTypes.number,
  }

  render () {
    const {
      data = {},
      onClikDelete = noop,
      money = 0,
    } = this.props;
    const {
      language
    } = currentLanguage;
    return (
      <View
        className={'card'}
        style={styles.container}>
        <View
          className={'card-body'}>
          <View
            className={'row'}
            style={styles.rowItems}>
            <View
              style={styles.halfWidth}>
              <h5
                className={'card-title'}>
                {
                  result(data, 'currencyType', '')
                }
              </h5>
            </View>
            <View
              style={styles.halfWidth}>
              <View
                className={'float-right'}>
                <View
                  className={'row'}>
                  <p
                    className={'card-text'} style={styles.numOfAmountByCurrency}>
                    {
                      calculateAmount(money, `${result(data, 'currencyRateByDollar', 0)}`)
                    }
                  </p>
                  <Icon
                    className={'fa fa-trash'}
                    style={{}}
                    onClick={onClikDelete}
                  />
                </View>
              </View>
            </View>
          </View>
          <p
            className={'card-text'}>
            {
              `${result(data, 'currencyType', '')} - ${result(data, 'currencyDesc', '')}`
            }
          </p>
          <p
            className={'card-text'}>
            {
              `${language.CARD__ONE_USD_EQUAL_TO}${result(data, 'currencyType', '')} ${result(data, 'currencyRateByDollar', 0)}`
            }
          </p>
        </View>
      </View>
    );
  }
}
