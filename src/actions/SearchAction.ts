import { SearchConstants } from "../constants";

export const SearchAction = {
  search,
  clear,
};

function search(term: string) {
  return { type: SearchConstants.SEARCH, term };
}

function clear() {
  return { type: SearchConstants.CLEAR, term: "" };
}
