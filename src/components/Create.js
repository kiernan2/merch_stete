import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function Create(props){

  function handleNewOrdersFormSubmission(event){
    event.preventDefault();
    props.onNewOrders({
      name: event.target.name,

    })
  }

}

export default Create;