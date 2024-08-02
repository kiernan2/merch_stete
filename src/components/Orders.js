import React from "react";
import Order from "./Order";
import PropTypes from "prop-types";

function Orders(props) {
  return (
    <React.Fragment>
      <hr/>
      {props.orders.map((order, index) =>
        <Order name={order.name}
          quantity={order.quantity}
          description={order.description}
          key={index} />
      )}
    </React.Fragment>
  )
}

Orders.propTypes = {
  orders: PropTypes.array
};

export default Orders;