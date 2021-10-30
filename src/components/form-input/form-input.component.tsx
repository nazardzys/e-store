import React from 'react';
import './form-input.styles.scss';

type Props = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  value: string;
  required?: boolean;
  name: string;
  type: string;
};

const FormInput: React.FC<Props> = ({ handleChange, value, label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} value={value} {...otherProps} />
      {
        label && <label className={`${value.length ? 'shrink' : ''} form-input-label`}>
          {label}
        </label>
      }
    </div>
  );
};

export default FormInput;
