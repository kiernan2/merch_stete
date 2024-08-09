import React from "react";
import PropTypes from "prop-types";

function Order(props) {
  
  return(
    <React.Fragment>
      <h3>{props.name} - {props.quantity}</h3>
      <p><em>{props.description}</em></p>
      <button onClick={props.buttonFunc}>Buy</button>
      <hr/>
    </React.Fragment>
  )
}

Order.propTypes = {
  name: PropTypes.string,
  quantity: PropTypes.number,
  description: PropTypes.string,
  buttonFunc: PropTypes.func
};

export default Order;