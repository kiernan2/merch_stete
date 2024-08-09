import React from "react";
import Orders from "./Orders";
import Create from "./Create";

class TheBody extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisiblePage: true,
      mainOrderList: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisiblePage: !prevState.formVisiblePage
    }));
  }

  handleAddingNewOrderToList = (newOrder) => {
    const newMainOrderList = this.state.mainOrderList.concat(newOrder);
    this.setState({
      mainOrderList: newMainOrderList,
      formVisiblePage: true
    });
  }

  handleBuy = () => {

    console.log("Give me IT")
    // let newState = {
    //   quantity: this.state.quantity + 1,
    //   name: this.string,
    //   description: this.string
    // }
    // this.setState({
    //   newState
    // })
  }

  render() {
    let buttonText = null;
    let currentlyVisibleState = null;
    if (this.state.formVisiblePage) {
      buttonText = "Create";
      currentlyVisibleState = <Orders orders={this.state.mainOrderList} onHandleBuy={this.handleBuy} />
    } else {
      buttonText = "List";
      currentlyVisibleState = <Create onNewOrders={this.handleAddingNewOrderToList} />
    }
    return (
      <React.Fragment>
        <button onClick={this.handleClick}>{buttonText}</button>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}

export default TheBody;