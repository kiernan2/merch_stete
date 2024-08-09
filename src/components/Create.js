import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function Create(props) {

  function handleNewOrdersFormSubmission(event) {
    event.preventDefault();
    props.onNewOrders({
      name: event.target.name.value,
      quantity: parseInt(event.target.quantity.value),
      description: event.target.description.value,
      id: v4(),
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewOrdersFormSubmission}>
        <input
          type="text"
          name="name"
          placeholder="name here"
          defaultValue="noInput"
        />
        <input 
          type="text"
          name="description"
          placeholder="description"
          defaultValue="noInput"
        />
        <input
          type="number"
          name="quantity"
          placeholder="0"
          defaultValue="0"
        />
        <button type="submit">submit</button>
      </form>
    </React.Fragment>
  );
}

Create.propTypes = {
  onNewOrders: PropTypes.func
};

export default Create;