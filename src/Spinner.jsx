import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function TransparentSpinner() {
  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-white bg-opacity-50">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default TransparentSpinner;
