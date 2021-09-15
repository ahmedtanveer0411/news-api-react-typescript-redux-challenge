import { NewsConstants } from "../constants";
import { NewsService } from "../services";
import { NewsArticle } from "../models/NewsArticle";

export const NewsActions = {
  getAll,
};

function getAll(searchTerm: string) {
  return (dispatch: any) =>
    NewsService.getAll(searchTerm).then((newsArticles: NewsArticle[]) =>
      dispatch(success(newsArticles))
    );

  function success(news: NewsArticle[]) {
    console.log("5. action.", news);
    return { type: NewsConstants.GETALL_SUCCESS, news };
  }
}
