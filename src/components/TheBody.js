import React from "react";
import Orders from "./Orders";
import Create from "./Create";
import Edit from "./Edit";

class TheBody extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisiblePage: true,
      mainOrderList: [],
      selectedOrder: null,
      editing: false
    };
  }

  menuToggle = () => {
    if (this.state.selectedOrder != null) {
      this.setState({
        formVisiblePage: true,
        selectedOrder: null,
        editing: false
      })
    } else {
      this.setState(prevState => ({
        formVisiblePage: !prevState.formVisiblePage
      }));
    }
  }

  handleAddingNewOrderToList = (newOrder) => {
    const newMainOrderList = this.state.mainOrderList.concat(newOrder);
    this.setState({
      mainOrderList: newMainOrderList,
      formVisiblePage: true
    });
  }

  handleEditingOrderOnList = (newOrder) => {
    const resetOrder = { ...this.state.selectedOrder, ...newOrder }
    const editingMainOrdersList = this.state.mainOrderList
      .filter(order => order.id !== this.state.selectedOrder.id)
      .concat(resetOrder);
    this.setState({ editing: false, mainOrderList: editingMainOrdersList })
  }

  handleBuy = (orderId) => {
    const foundOrder = this.state.mainOrderList.find(order => order.id === orderId);
    const updatedOrder = { ...foundOrder, count: foundOrder.count - 1 }
    if (updatedOrder.count < 0) {
      return;
    }
    const editingMainOrdersList = this.state.mainOrderList
      .filter(order => order.id !== orderId)
      .concat(updatedOrder);
    this.setState({
      mainOrderList: editingMainOrdersList
    });
  }

  handleEdit = (orderId) => {
    const foundOrder = this.state.mainOrderList.find(order => order.id === orderId);
    this.setState({ selectedOrder: foundOrder })
    this.setState({ editing: true })
  }

  render() {
    let buttonText = null;
    let currentlyVisibleState = null;
    if (this.state.editing) {
      buttonText = "Back";
      currentlyVisibleState = <Edit theOrder={this.state.selectedOrder} editOrderOnList={this.handleEditingOrderOnList}></Edit>
    } else if (this.state.formVisiblePage) {
      buttonText = "Create";
      currentlyVisibleState = <Orders orders={this.state.mainOrderList} onHandleBuy={this.handleBuy} onHandleEdit={this.handleEdit} />
    } else {
      buttonText = "List";
      currentlyVisibleState = <Create orderList={this.state.mainOrderList} addNewOrderToList={this.handleAddingNewOrderToList} />
    }
    return (
      <React.Fragment>
        <button onClick={this.menuToggle}>{buttonText}</button>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}

export default TheBody;