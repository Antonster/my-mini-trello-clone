import * as React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import './TaskList.css';
import Task from './Task/Task';
import renderInput from '../../../forms/formElements/input';
import {
  requiredName,
  emptyName,
} from '../../../forms/formValidators/formValidators';

const TaskList = (props) => {
  const { handleSubmit } = props;

  return (
    <div className="board_container_tasks_task_list">
      <div className="board_container_tasks_task_list_title">Name</div>
      <hr className="board_container_tasks_task_list_separator" />
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
      <Task />
    </div>
  );
};

export default reduxForm()(TaskList);

TaskList.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
