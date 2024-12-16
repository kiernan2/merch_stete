const reducer = (state = {}, action) => {
  const { names, description, count, id } = action;
  switch (action.type) {
    case 'ADD_ITEM' :
      return Object.assign({}, state, {
        [id]: {
          names: names,
          description: description,
          count: count,
          id: id
        }
      });
    case 'DELETE_ITEM':
      let newState = { ...state };
      delete newState[id];
      return newState;
      default:
        return state;
    }
};

export default reducer;