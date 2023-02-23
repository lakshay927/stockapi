import * as actionTypes from "../constants/actionTypes";

const initialState = {
  allStocks: [],
};

const stocksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_STOCKS:
      return {
        ...state,
        allStocks: action.payload,
      };
    case actionTypes.FILTER_STOCKS:
      const filteredStocks = state.allStocks.filter((stock) => {
        return stock.name.toLowerCase().includes(action.payload.toLowerCase());
      });
      return {
        ...state,
        allStocks: filteredStocks,
      };
    default:
      return state;
  }
};

export default stocksReducer;
