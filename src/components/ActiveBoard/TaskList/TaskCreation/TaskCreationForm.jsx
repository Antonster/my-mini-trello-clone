import * as React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import TaskCreationInput from './TaskCreationInput';
import {
  requiredName,
  emptyName,
} from '../../../../formValidators/formValidators';

const TaskCreationForm = (props) => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="taskName"
        type="text"
        component={TaskCreationInput}
        validate={[requiredName, emptyName]}
      />
    </form>
  );
};

export default reduxForm()(TaskCreationForm);

TaskCreationForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
