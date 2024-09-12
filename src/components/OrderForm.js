import React from "react";
import PropTypes from "prop-types";

function OrderFrom(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type="text"
          name="names"
          placeholder="noInput" />
        <input
          type="text"
          name="description"
          placeholder="noInput" />
        <input
          type="number"
          name="count"
          placeholder="0" />
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

OrderFrom.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default OrderFrom;