import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const Error = styled.p`
  font-size: 0.8rem;
  text-align: center;
  padding-top: 10px;
`;

const TaskCreationInput = (props) => {
  const {
    input,
    type,
    meta: { touched, active, error },
  } = props;

  return (
    <div>
      <Input {...input} type={type} autoComplete="off" />
      {touched && active && error && <Error>{error}</Error>}
    </div>
  );
};

export default TaskCreationInput;

TaskCreationInput.propTypes = {
  type: PropTypes.string.isRequired,
  meta: PropTypes.any.isRequired,
  input: PropTypes.any.isRequired,
};
