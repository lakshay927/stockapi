import * as actionTypes from "../constants/actionTypes";

const initialState = {
  stocks: [],
};

const portfolioReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.BUY_STOCK:
      const existingStock = state.stocks.find(
        (stock) => stock.symbol === action.payload.stock.symbol
      );
      const newStock = {
        ...action.payload.stock,
        quantity: action.payload.quantity,
      };
      if (existingStock) {
        const updatedStocks = state.stocks.map((stock) => {
          if (stock.symbol === action.payload.stock.symbol) {
            return {
              ...stock,
              quantity: stock.quantity + action.payload.quantity,
            };
          }
          return stock;
        });
        return {
          ...state,
          stocks: updatedStocks,
        };
      } else {
        return {
          ...state,
          stocks: [...state.stocks, newStock],
        };
      }
    case actionTypes.SELL_STOCK:
      const sellingStock = state.stocks.find(
        (stock) => stock.symbol === action.payload.stock.symbol
      );
      if (sellingStock.quantity === action.payload.quantity) {
        const updatedStocks = state.stocks.filter(
          (stock) => stock.symbol !== action.payload.stock.symbol
        );
        return {
          ...state,
          stocks: updatedStocks,
        };
      } else {
        const updatedStocks = state.stocks.map((stock) => {
          if (stock.symbol === action.payload.stock.symbol) {
            return {
              ...stock,
              quantity: stock.quantity - action.payload.quantity,
            };
          }
          return stock;
        });
        return {
          ...state,
          stocks: updatedStocks,
        };
      }
    default:
      return state;
  }
};

export default portfolioReducer;
