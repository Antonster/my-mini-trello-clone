import * as React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';

import TaskCreationInput from './TaskCreationInput';
import {
  requiredName,
  emptyName,
} from '../../../../formValidators/formValidators';
import crossImg from '../../../../assets/cross.svg';

const CreationForm = styled.form`
  position: relative;
  padding: 0 5px;
`;

const FormCancelButtom = styled.button`
  position: absolute;
  right: -8px;
  top: -8px;
  width: 24px;
  height: 24px;
  background: url(${crossImg}) no-repeat 50% 50% / cover;
  transition: all 200ms ease-in-out;

  &:hover {
    transform: scale(1.2) rotate(-15deg);
  }
`;

const TaskCreationForm = (props) => {
  const { handleSubmit, newTaskFormStatus } = props;

  return (
    <CreationForm onSubmit={handleSubmit}>
      <Field
        name="taskName"
        type="text"
        component={TaskCreationInput}
        validate={[requiredName, emptyName]}
      />
      <FormCancelButtom
        type="button"
        aria-label="cancel"
        onClick={newTaskFormStatus}
      />
    </CreationForm>
  );
};

export default reduxForm()(TaskCreationForm);

TaskCreationForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  newTaskFormStatus: PropTypes.func.isRequired,
};
