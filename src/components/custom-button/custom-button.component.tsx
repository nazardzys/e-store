import React from 'react';
import './custom-button.styles.scss';

type Props = {
  children: React.ReactChild;
  onClick?: any;
  type?: 'button' | 'submit';
  isGoogleSignIn?: boolean;
};

const CustomButton: React.FC<Props> = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button 
      className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} 
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
