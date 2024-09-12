import React from "react";
import Order from "./Order";
import PropTypes from "prop-types";

function Orders(props) {
  return (
    <React.Fragment>
      <hr/>
      {props.orders.map((order) =>
        <Order name={order.name}
          count={order.count}
          description={order.description}
          key={order.id}
          id={order.id}
          buttonFunc={props.onHandleBuy}
        />
      )}
    </React.Fragment>
  );
};

Orders.propTypes = {
  orders: PropTypes.array,
  onHandleBuy: PropTypes.func
};

export default Orders;