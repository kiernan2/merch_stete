import React from "react";
import PropTypes from "prop-types";

function Order(props) {
  
  return(
    <React.Fragment>
      <h3>{props.name} - {props.count}</h3>
      <p><em>{props.description}</em></p>
      <button onClick={() => props.buttonFunc(props.id)}>Buy</button>
      <hr/>
    </React.Fragment>
  )
}

Order.propTypes = {
  name: PropTypes.string,
  count: PropTypes.number,
  description: PropTypes.string,
  id: PropTypes.string,
  buttonFunc: PropTypes.func
};

export default Order;