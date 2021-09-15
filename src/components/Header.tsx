import { makeStyles, TextField, Container } from "@material-ui/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { SearchConstants } from "../constants";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      height: 60,
    },
  },
  searchBox: {
    width: "100%",
  },
  flex: {
    display: "flex",
  },
  button: {
    padding: 28,
  },
}));

export default function Header() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [searchText, setSearchText] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("onChange");
    setSearchText(e.currentTarget.value);
    dispatch({ type: SearchConstants.SEARCH, term: e.currentTarget.value });
  };
  return (
    <div className={classes.root}>
      <Container className={classes.flex}>
        <TextField
          id="search"
          label="Search..."
          variant="outlined"
          className={classes.searchBox}
          onChange={onChange}
          value={searchText}
        />
      </Container>
    </div>
  );
}
