import * as React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import './TaskCreationForm.css';
import renderInput from '../../../../forms/formElements/input';
import {
  requiredName,
  emptyName,
} from '../../../../forms/formValidators/formValidators';

const TaskCreationForm = (props) => {
  const { handleSubmit } = props;

  return (
    <form
      onSubmit={handleSubmit}
      className="board_container_tasks_task_list_form"
    >
      <Field
        className="board_container_tasks_task_list_form_input"
        errorClassName="board_container_tasks_task_list_form_input_error"
        name="taskName"
        type="text"
        component={renderInput}
        validate={[requiredName, emptyName]}
      />
    </form>
  );
};

export default reduxForm()(TaskCreationForm);

TaskCreationForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
