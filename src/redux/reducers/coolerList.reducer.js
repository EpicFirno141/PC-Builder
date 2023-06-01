const coolerListReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_COOLER_LIST':
        return action.payload;
      default:
        return state;
    }
  };

export default coolerListReducer;