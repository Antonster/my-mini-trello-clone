import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  box-shadow: ${(props) =>
    props.activeInput
      ? `0 3px 6px rgba(188, 0, 0, 0.45),
  0 3px 6px rgba(188, 0, 0, 0.45)`
      : `0 3px 6px rgba(0, 0, 0, 0.16),
  0 3px 6px rgba(0, 0, 0, 0.23)`};
`;

class TaskCreationInput extends React.Component {
  getErrorStyles = () => {
    const {
      meta: { touched, active, error },
    } = this.props;

    if (touched && active && error) {
      return true;
    }
    return false;
  };

  render() {
    const { input, type } = this.props;

    return (
      <div>
        <Input
          {...input}
          type={type}
          autoComplete="off"
          activeInput={this.getErrorStyles()}
        />
      </div>
    );
  }
}

export default TaskCreationInput;

TaskCreationInput.propTypes = {
  type: PropTypes.string.isRequired,
  meta: PropTypes.any.isRequired,
  input: PropTypes.any.isRequired,
};
