import React from "react";
import Orders from "./Orders";
import Create from "./Create";

class TheBody extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisiblePage: false
    };
  }

  render() {
    let buttonText = null;
    let currentlyVisibleState = null;
    if (this.state.formVisiblePage) {
      buttonText = "";
      currentlyVisibleState = <Orders />;
    } else {
      buttonText = "";
      currentlyVisibleState = <Create />;
    }
    return (
      <React.Fragment>
        <button onClick={this.handleClick}></button>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}

export default TheBody;