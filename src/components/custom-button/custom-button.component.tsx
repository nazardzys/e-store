import React from 'react';
import './custom-button.styles.scss';

type Props = {
  children: React.ReactChild;
  onClick?: any;
  type?: 'button' | 'submit';
};

const CustomButton: React.FC<Props> = ({ children, ...otherProps }) => {
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
