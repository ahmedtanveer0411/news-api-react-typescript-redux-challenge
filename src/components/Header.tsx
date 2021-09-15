import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      height: 30,
    },
  },
}));

export default function Header() {
  const classes = useStyles();

  return <div className={classes.root}></div>;
}
