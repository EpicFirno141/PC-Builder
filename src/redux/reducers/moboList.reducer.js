const moboListReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_MOBO_LIST':
        return action.payload;
      default:
        return state;
    }
  };

export default moboListReducer;