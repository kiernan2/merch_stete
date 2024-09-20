import React from "react";
import PropTypes from "prop-types";
import OrderFrom from "./OrderForm";

function Edit(props){

  function editOrderOnList(event){
    event.preventDefault();
    props.editOrderOnList({
      name: event.target.name.value,
      description: event.target.description.value,
      count: parseInt(event.target.count.value)
    });
  }

  return (
    <React.Fragment>
      <OrderFrom
        formSubmissionHandler={editOrderOnList}
        prvOrder={props.theOrder}
        buttonText="Help" />
    </React.Fragment>
  );
}

Edit.propTypes = {
  editOrderOnList: PropTypes.func,
  theOrder: PropTypes.object
};

export default Edit;