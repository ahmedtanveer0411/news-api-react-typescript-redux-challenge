import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useSelector } from "react-redux";
import { NewsState } from "../models/NewsArticle";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function NewsTable() {
  const news = useSelector((state: NewsState) => {
    console.log("state", state);
    return state.news;
  });

  useEffect(() => {
    console.log("newsState", news);
  }, [news]);
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell align="right">Source</TableCell>
            <TableCell align="right">Author</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Url</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {news?.items?.map((item) => (
            <TableRow key={item.title}>
              <TableCell component="th" scope="row">
                <img
                  src={item.urlToImage}
                  alt={item.urlToImage}
                  height="100"
                  width="100"
                />
              </TableCell>
              <TableCell align="right">{item.source.name}</TableCell>
              <TableCell align="right">{item.author}</TableCell>
              <TableCell align="right">{item.title}</TableCell>
              <TableCell align="right">{item.publishedAt}</TableCell>
              <TableCell align="right">{item.url}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
