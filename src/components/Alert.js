import React from "react";
import PropTypes from "prop-types";

export default function Alert(props) {
  return (
    <div style={{height: '50px'}}>
    {props.alert && <div className="alert alert-success" role="alert">
      {props.alert}
    </div>}
    </div>
  );
}
