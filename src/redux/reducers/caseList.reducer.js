const caseListReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_CASE_LIST':
        return action.payload;
      default:
        return state;
    }
  };

export default caseListReducer;