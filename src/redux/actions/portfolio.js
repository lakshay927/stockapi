import * as actionTypes from "../constants/actionTypes";

export const buyStock = (stock, quantity) => {
  return {
    type: actionTypes.BUY_STOCK,
    payload: { stock, quantity },
  };
};

export const sellStock = (stock, quantity) => {
  return {
    type: actionTypes.SELL_STOCK,
    payload: { stock, quantity },
  };
};

// Other action creators related to portfolio
