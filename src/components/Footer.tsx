import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function Footer() {
  const classes = useStyles();

  return <div className={classes.root}>Footer</div>;
}
