import {connect} from 'react-redux';
import HomePage from '../../pages/HomePage/home.page';
// import {result} from 'lodash';
import {reduxForm} from 'redux-form'; // initialize, change
// import {validateRequiredFields} from '../../utils/validation.util';

const formConfig = {
  form: 'HomeForm',
  validate: () => { // values
    const errors = {
      // ...validateRequiredFields(values, [
      //   groupFormLabel.NAME,
      //   groupFormLabel.DESCRIPTION,
      //   groupFormLabel.USER_GROUP,
      //   groupFormLabel.PRIVILEGE_GROUP,
      // ]),
    };
    return errors;
  },
  initialValues: {
    'name': '',
    'description': '',
    'userGroup': [],
    'privilegeGroup': [],
  },
  onSubmit: () => { // values, dispatch, {}
    // onSubmitEdit({...location.state, ...values, menu: result(location, 'menu', '')});
  }
};

const HomeForm = reduxForm(formConfig)(HomePage);

const mapStateToProps = () => ({});

export const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HomeForm);
