const storageListReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_STORAGE_LIST':
        return action.payload;
      default:
        return state;
    }
  };

export default storageListReducer;