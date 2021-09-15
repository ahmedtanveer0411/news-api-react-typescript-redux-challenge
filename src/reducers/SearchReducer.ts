import { SearchConstants } from "../constants";

interface StateType {
  state: String | null;
}

interface ActionType {
  type: String;
  term: String;
}

export function search(state: StateType = { state: null }, action: ActionType) {
  switch (action.type) {
    case SearchConstants.SEARCH:
      return {
        term: action.term,
      };
    default:
      return state;
  }
}
