import * as React from 'react';
import PropTypes from 'prop-types';

const renderInput = ({
  input,
  type,
  className,
  errorClassName,
  meta: { touched, error, warning },
}) => {
  return (
    <div>
      <input {...input} className={className} type={type} />
      {touched &&
        ((error && <p className={errorClassName}>{error}</p>) ||
          (warning && <p>{warning}</p>))}
    </div>
  );
};

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
