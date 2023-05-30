let components = {
    gpu: 0,
    cpu: 0,
    cpu_cooler: 0,
    psu: 0,
    motherboard: 0,
    memory: 0,
    storage: 0,
    case: 0
}

const pcComponentCountReducer = (state = components, action) => {
    switch (action.type) {
      case 'ADD_GPU':
        return action.payload;
      default:
        return state;
    }
  };

export default pcComponentCountReducer;