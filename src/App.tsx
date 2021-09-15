import React, { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { NewsActions } from "./actions";
import NewsTable from "./components/NewsTable";

// components
import Layout from "./components/Layout";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("1. useEffect");
    dispatch(NewsActions.getAll("sports"));
  }, [dispatch]);

  return (
    <Layout>
      <NewsTable />
    </Layout>
  );
}

export default App;
