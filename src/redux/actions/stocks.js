import * as types from "../constants/actionTypes";

export function setStocks(stocks) {
  return { type: types.SET_STOCKS, payload: { stocks } };
}

export function fetchStocks(stocks) {
  return { type: types.FETCH_STOCKS, stocks };
}
