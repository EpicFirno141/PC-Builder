const pcListReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_PC_LIST':
        return action.payload;
      default:
        return state;
    }
  };

export default pcListReducer;