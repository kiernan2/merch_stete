import React from "react";
import Orders from "./Orders";
import Create from "./Create";

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

  handleBuy = (orderId) => {
    const foundOrder = this.state.mainOrderList.find(order => order.id == orderId);
    const updatedOrder = { ...foundOrder, count: foundOrder.count -1 }
    const editingMainOrdersList = this.state.mainOrderList
      .filter(order => order.id !== orderId)
      .concat(updatedOrder);
    this.setState({
      mainOrderList: editingMainOrdersList
    });
  }
  
    // handleEditingTicketInList = (ticketToEdit) => {
    //   const editingMainTicketList = this.state.mainTicketList
    //     .filter(ticket => ticket.id !== this.state.selectedTicket.id)
    //     .concat(ticketToEdit);
    //   this.setState({
    //     mainTicketList: editingMainTicketList,
    //     editing: false,
    //     selectedTicket: null
    //   });
    // }
    
  render() {
    let buttonText = null;
    let currentlyVisibleState = null;
    if (this.state.formVisiblePage) {
      buttonText = "Create";
      currentlyVisibleState = <Orders orders={this.state.mainOrderList} onHandleBuy={this.handleBuy}/>
    } else {
      buttonText = "List";
      currentlyVisibleState = <Create orderList={this.state.mainOrderList} addNewOrderToList={this.handleAddingNewOrderToList}/>
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