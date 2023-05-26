const pcColor = (state = '', action) => {
    switch (action.type) {
      case 'SET_PC_COLOR':
        return action.payload;
      default:
        return state;
    }
  };

export default pcColor;