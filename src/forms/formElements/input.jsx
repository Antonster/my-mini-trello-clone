import * as React from 'react';
import PropTypes from 'prop-types';

class renderInput extends React.Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  componentDidMount() {
    const {
      inputRef,
      props: { className },
    } = this;

    if (className !== 'board_container_tasks_task_list_form_input') {
      inputRef.current.focus();
    }
  }

  render() {
    const {
      inputRef,
      props: {
        input,
        type,
        className,
        errorClassName,
        meta: { touched, active, error },
      },
    } = this;

    return (
      <div>
        <input
          {...input}
          className={className}
          type={type}
          ref={inputRef}
          autoComplete="off"
        />
        {touched && active && error && (
          <p className={errorClassName}>{error}</p>
        )}
      </div>
    );
  }
}

export default renderInput;

renderInput.propTypes = {
  className: PropTypes.string,
  errorClassName: PropTypes.string,
  type: PropTypes.string.isRequired,
  meta: PropTypes.any.isRequired,
  input: PropTypes.any.isRequired,
};

renderInput.defaultProps = {
  className: '',
  errorClassName: '',
};
