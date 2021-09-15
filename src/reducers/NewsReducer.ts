import { NewsConstants } from "../constants";
import { ActionType, NewsState } from "../models/NewsArticle";

export function news(
  state: NewsState = { news: { items: [] } },
  action: ActionType
) {
  console.log("News reducer", action.news, state);
  switch (action.type) {
    case NewsConstants.GETALL_SUCCESS:
      console.log("Coming", action.news);
      return {
        items: action.news,
      };
    default:
      return state;
  }
}
