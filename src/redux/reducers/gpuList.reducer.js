const gpuListReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_GPU_LIST':
        return action.payload;
      default:
        return state;
    }
  };

export default gpuListReducer;