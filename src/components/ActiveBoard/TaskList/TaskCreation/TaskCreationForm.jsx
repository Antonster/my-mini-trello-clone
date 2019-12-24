import * as React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';

import Input from '../../../FormsInput/Input';
import {
  requiredName,
  emptyName,
} from '../../../../formValidators/formValidators';
import crossImg from '../../../../assets/cross.svg';

const CreationForm = styled.form`
  position: relative;
  padding: 0 5px;
`;

const TaskCrossButton = styled.button`
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

const TaskButtonContainer = styled.div`
  margin: 10px 0;
  text-align: center;
`;

const TaskCancelButton = styled.button`
  margin: 0 10px;
  width: 100px;
  height: 40px;
  border-radius: 5px;
  transition: all 200ms ease-in-out;
  background-color: white;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  &:hover {
    color: #02e2ea;
    transform: scale(1.1);
  }
`;

const TaskSubmitButton = styled.button`
  margin: 0 10px;
  width: 100px;
  height: 40px;
  border-radius: 5px;
  background-color: rgba(159, 231, 164, 0.7);
  color: white;
  text-shadow: 0px 0px 3px #000;
  transition: all 200ms ease-in-out;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  &:hover {
    color: #02e2ea;
    transform: scale(1.1);
  }
`;

const TaskCreationForm = (props) => {
  const { handleSubmit, newTaskFormStatus } = props;

  return (
    <CreationForm onSubmit={handleSubmit}>
      <Field
        name="taskName"
        type="text"
        component={Input}
        validate={[requiredName, emptyName]}
      />
      <TaskCrossButton
        type="button"
        aria-label="cancel"
        onClick={newTaskFormStatus}
      />
      <TaskButtonContainer>
        <TaskCancelButton type="button" onClick={newTaskFormStatus}>
          CANCEL
        </TaskCancelButton>
        <TaskSubmitButton type="submit">CREATE</TaskSubmitButton>
      </TaskButtonContainer>
    </CreationForm>
  );
};

export default reduxForm()(TaskCreationForm);

TaskCreationForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  newTaskFormStatus: PropTypes.func.isRequired,
};
