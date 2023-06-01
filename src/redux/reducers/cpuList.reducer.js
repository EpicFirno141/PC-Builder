const cpuListReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_CPU_LIST':
        return action.payload;
      default:
        return state;
    }
  };

export default cpuListReducer;