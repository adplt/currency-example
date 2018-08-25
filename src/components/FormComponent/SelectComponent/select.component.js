import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {result, noop} from 'lodash';
import View from '../../ViewComponent/view.component';
import styles from './select.style';
import currentLanguage from '../../../config/language';

export default class InputComponent extends PureComponent {

  static propTypes = {
    // proptypes for select form
    data: PropTypes.array,

    // getting from redux-form automatically send these props
    input: PropTypes.object,
    disabled: PropTypes.bool,
    meta: PropTypes.object,
    selectStyle: PropTypes.object,
  };

  onChange = (e) => {
    const {input = {}} = this.props;
    const {onChange = noop} = input;
    onChange(e.target.value);
  }

  render () {
    const {
      data = [],
      disabled = false,
      meta = {},
      selectStyle = {},
    } = this.props;
    const {
      language
    } = currentLanguage;
    const err = !disabled && (meta && meta.touched && !meta.active && meta.error);
    return (
      <View>
        <select
          onChange={this.onChange}
          className={'form-control'}
          style={{...styles.selectStyle, ...selectStyle}}>
          <option
            value={'Choose One'}>
            {
              language.SELECT_COMPONENT__VALUE_CHOOSE_ONE
            }
          </option>
          {
            data.map((value, key) => (
              <option
                key={key}
                value={result(value, 'label', '')}>
                {
                  result(value, 'label', '') // using label for make this component general (applicable for other pages)
                }
              </option>
            ))
          }
        </select>
        {
          // this is for showing error message below component
          err && (
            <View
              className={'alert alert-danger'}>
              {
                err
              }
            </View>
          )
        }
      </View>
    );
  }
}
