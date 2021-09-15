import axios from "axios";
import { NewsArticle } from "../models/NewsArticle";

const getAll = async (topic: string) => {
  const NEWS_URL: string = `${process.env.REACT_APP_BASE_URL}?q=${topic}&from=2021-08-15&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_KEY}`;
  console.log("2. getAll", NEWS_URL);
  const response = await axios.get(NEWS_URL);
  console.log("3. Response", response);
  const news: NewsArticle[] = response.data.articles;
  console.log("4. News", response);
  return news;
};

export const NewsService = {
  getAll,
};
