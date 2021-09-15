import React, { FC, ReactNode } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Header from "./Header";
import Footer from "./Footer";

// define css-in-js
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      minHeight: `calc(100vh - 30px)`,
      background: theme.palette.background.paper,
      marginLeft: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(9) + 1,
      },
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 250,
    },
  })
);

// define interface to represent component props
interface Props {
  children: ReactNode;
}

// functional component
const Layout: FC<Props> = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <header>
        <Header />
      </header>
      <main className={classes.content}>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
