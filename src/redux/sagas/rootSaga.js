import { takeEvery } from "redux-saga/effects";
import { fetchStocks } from "./handlers/stocks";

import * as actionTypes from "../constants/actionTypes";

function* rootSaga() {
  yield takeEvery(actionTypes.FETCH_STOCKS, fetchStocks);
}

export default rootSaga;
