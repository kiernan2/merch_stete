import orderListReducer from '../reducers/order-list-reducer';

describe('orderListReducer', () => {
  let action; 

  const currentState = {
    1: {
      names: 'Ryan',
      description: 'Test Description',
      count: 7,
      id: 1
    }, 2: {
      names: "Jon",
      description: 'Something something',
      const: 9,
      id: 2
    }
  }

  const orderData = {
    names: 'Ryan',
    description: 'Test Description',
    count: 7,
    id: 1
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(orderListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new ticket data to mainTicketList', () => {
    const { names, location, issue, id } = orderData;
    action = {
      type: 'ADD_ITEM',
      names: names,
      location: location,
      issue: issue,
      id: id
    };

    expect(orderListReducer({}, action)).toEqual({
      [id] : {
        names: names,
        location: location,
        issue: issue,
        id: id
      }
    });
  });

  test('Should successfully delete a ticket', () => {
    action = {
      type: 'DELETE_ITEM',
      id: 1
    };
    expect(orderListReducer(currentState, action)).toEqual({
      2: {
        names: "Jon",
        description: 'Something something',
        const: 9,
        id: 2
      }
    });
  });

})