const pcWattageReducer = (state = { wattage: 0 }, action) => {
    switch (action.type) {
      case 'SET_PC_WATTAGE':
        let total = 0;
        for (let component of action.payload){
            total = total + component.wattage;
        }
        return { wattage: total };
      default:
        return state;
    }
  };

export default pcWattageReducer;