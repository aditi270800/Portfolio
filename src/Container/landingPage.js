import React from "react";
import { createUseStyles } from "react-jss";
import { Outlet } from "react-router-dom";
import Header from "../Components/header";

const useStyles = createUseStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "black",
    // height: "100vh",
    color: "white",
    background: "linear-gradient(30deg,#00356B,rgba(255,0,0,0), transparent)",
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Header />
      <Outlet />
    </div>
  );
};

export default LandingPage;
