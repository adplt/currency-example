import React, {Component} from 'react';
import View from '../ViewComponent/view.component';
import PropTypes from 'prop-types';
import styles from './header.style';
import currentLanguage from '../../config/language';

export default class HeaderComponent extends Component {

  static propTypes = {
    money: PropTypes.number,
  }

  render () {
    const {
      money = 0,
    } = this.props;
    const {
      language
    } = currentLanguage;
    return (
      <View
        className={'container'}
        style={styles.container}>
        <p><strong>{language.HOME__CURRENCY_HEADER_TITLE}</strong></p>
        <View
          className={'row'}
          style={styles.rowItems}>
          <View
            style={styles.halfWidth}>
            <p>
              {
                language.HOME__CURRENCY_HEADER_SUBTITLE
              }
            </p>
          </View>
          <View
            style={styles.halfWidth}>
            <View
              className={'float-right'}
              style={styles.amount}>
              <p>
                {
                  money
                }
              </p>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
