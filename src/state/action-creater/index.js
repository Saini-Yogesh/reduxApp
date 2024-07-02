export const depositeMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "deposite",
      payload: amount,
    });
  };
};

export const withdwawMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "withdwaw",
      payload: amount,
    });
  };
};
