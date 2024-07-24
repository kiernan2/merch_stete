import React from "react";
import PropTypes from "prop-types";

function Orders(props) {
  return(
    <React.Fragment>
      <hr/>
      {props.ordersList.map(() =>
        null
      )}
    </React.Fragment>
  )
}

export default Orders;