import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { NewsActions } from "./actions";
import NewsTable from "./components/NewsTable";

// components
import Layout from "./components/Layout";
import { NewsState } from "./models/NewsArticle";

function App() {
  const state = useSelector((state: NewsState) => {
    console.log("state", state);
    return state;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("1. useEffect");
    dispatch(
      NewsActions.getAll(state?.search?.term ? state?.search?.term : "sports")
    );
  }, [dispatch, state, state?.search, state?.search?.term]);

  return (
    <Layout>
      <NewsTable />
    </Layout>
  );
}

export default App;
