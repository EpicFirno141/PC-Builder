const pcComponentCountReducer = (state = {}, action) => {
    switch (action.type) {
      case 'COUNT_COMPONENTS':
        return action.payload;
      default:
        return state;
    }
  };

export default pcComponentCountReducer;