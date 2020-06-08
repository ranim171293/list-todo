import React from 'react';
import PropTypes from 'prop-types';

const RenderFormField = ({
  input,
  label,
  type,
  className,
  readonly,
  disabled,
  placeHolder,
  autoFocus,
  meta: { touched, error, warning },
}) => (
  <div className='formField-wrapper'>
    <div className="label">{label}</div>
    <input
      {...input}
      readOnly={readonly}
      disabled={disabled}
      type={type}
      placeholder={placeHolder}
      autoFocus={autoFocus}
      className={touched && (error || warning) ? 'FieldError' : className}
    />
    {touched && ((error && <span className="error"> {error} </span>) || (warning && <span className="error"> {warning} </span>))}
  </div>
);

RenderFormField.propTypes = {
  input: PropTypes.any,
  label: PropTypes.any,
  type: PropTypes.string,
  readonly: PropTypes.bool,
  disabled: PropTypes.bool,
  placeHolder: PropTypes.string,
  autoFocus: PropTypes.bool,
  meta: PropTypes.object,
};

export default RenderFormField;