import { combineReducers } from "redux";
import stocksReducer from "./stocks";
import portfolioReducer from "./portfolio";

import userReducer from "./user";

const rootReducer = combineReducers({
  stocks: stocksReducer,
  portfolio: portfolioReducer,

  user: userReducer,
});

export default rootReducer;
