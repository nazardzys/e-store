import React from 'react';

const WithSpinner = WrappedComponent => {
  return ({ isLoading, ...otherProps }) => {
   return isLoading ? <div className="spinner-overlay">
     <div className="spinner-container" />
   </div> : <WrappedComponent {...otherProps} />
 };
};

export default WithSpinner;