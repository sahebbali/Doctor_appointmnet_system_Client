import React from "react";

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center spinner">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">
          <img src="./images/30.gif" />
        </span>
      </div>
    </div>
  );
};

export default Spinner