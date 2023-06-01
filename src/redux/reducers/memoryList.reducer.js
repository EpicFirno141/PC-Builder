const memoryListReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_MEMORY_LIST':
        return action.payload;
      default:
        return state;
    }
  };

export default memoryListReducer;