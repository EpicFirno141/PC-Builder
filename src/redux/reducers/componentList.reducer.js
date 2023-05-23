const componentListReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_COMPONENT_LIST':
        return action.payload;
      default:
        return state;
    }
  };

export default componentListReducer;