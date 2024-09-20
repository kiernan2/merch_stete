import React from "react";
import PropTypes from "prop-types";

function Order(props) {
  return (
    <React.Fragment>
      <h3>{props.name} - {props.count}</h3>
      <p><em>{props.description}</em></p>
      <button onClick={() => props.buyFunc(props.id)}>Buy</button>
      <button onClick={() => props.editFunc(props.id)}>Edit</button>
      <hr />
    </React.Fragment>
  )
}

Order.propTypes = {
  name: PropTypes.string,
  count: PropTypes.number,
  description: PropTypes.string,
  id: PropTypes.string,
  buyFunc: PropTypes.func,
  editFunc: PropTypes.func
};

export default Order;