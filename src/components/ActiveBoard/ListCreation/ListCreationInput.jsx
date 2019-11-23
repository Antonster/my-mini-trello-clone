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
  text-shadow: 0px 0px 3px white;
  text-align: center;
  padding-top: 10px;
`;

class ListCreationInput extends React.Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  componentDidMount() {
    const { inputRef } = this;

    inputRef.current.focus();
  }

  render() {
    const {
      inputRef,
      props: {
        input,
        type,
        meta: { touched, error },
      },
    } = this;

    return (
      <div>
        <Input {...input} type={type} ref={inputRef} autoComplete="off" />
        {touched && error && <Error>{error}</Error>}
      </div>
    );
  }
}

export default ListCreationInput;

ListCreationInput.propTypes = {
  type: PropTypes.string.isRequired,
  meta: PropTypes.any.isRequired,
  input: PropTypes.any.isRequired,
};
