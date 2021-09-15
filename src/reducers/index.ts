import { combineReducers } from "redux";

import { news } from "./NewsReducer";
import { search } from "./SearchReducer";

const rootReducer = combineReducers({
  news,
  search,
});

export default rootReducer;
