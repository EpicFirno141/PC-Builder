const pcItemReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_PC_ITEM':
        return action.payload;
      default:
        return state;
    }
  };

export default pcItemReducer;