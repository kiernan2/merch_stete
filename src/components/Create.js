import React from "react";
import PropTypes from "prop-types";
import OrderFrom from "./OrderForm";
import { v4 } from "uuid";


function Create(props){

  function addNewOrderToList(event){
    event.preventDefault();
    props.addNewOrderToList({
      name: event.target.names.value,
      description: event.target.description.value,
      count: parseInt(event.target.count.value),
      id: v4(),
    });
  }

  return (
    <React.Fragment>
      <OrderFrom
        formSubmissionHandler={addNewOrderToList}
        buttonText="Help" />
    </React.Fragment>
  );
}

Create.propTypes = {
  addNewOrderToList: PropTypes.func
};

export default Create;