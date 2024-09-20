import React from "react";
import PropTypes from "prop-types";

function OrderFrom(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type="text"
          name="name"
          defaultValue={props?.prvOrder?.name || ""}
          placeholder="noInput" />
        <input
          type="text"
          name="description"
          defaultValue={props?.prvOrder?.description || ""}
          placeholder="noInput" />
        <input
          type="number"
          name="count"
          defaultValue={props?.prvOrder?.count || 0}
          placeholder="0" />
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

OrderFrom.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
  prvOrder: PropTypes.object
};

export default OrderFrom;