import { call, put } from "redux-saga/effects";
import { setStocks } from "../../actions/stocks";
import { getStocks } from "../requests/stocks";
export function* fetchStocks(action) {
  try {
    const response = yield call(getStocks);

    yield put(setStocks(response));
  } catch (error) {
    console.log(error);
  }
}
