const psuListReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_PSU_LIST':
        return action.payload;
      default:
        return state;
    }
  };

export default psuListReducer;