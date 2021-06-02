import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const BasicPagination = ({ totalPages }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Pagination count={11} defaultPage={6} />
    </div>
  );
};

export default BasicPagination;
