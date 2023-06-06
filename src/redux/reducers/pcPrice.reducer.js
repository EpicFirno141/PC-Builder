const pcPriceReducer = (state = { price: 0 }, action) => {
    switch (action.type) {
      case 'SET_PC_PRICE':
        let total = 0;
        for (let component of action.payload){
            total = total + component.price;
        }
        return { price: total };
      default:
        return state;
    }
  };

export default pcPriceReducer;