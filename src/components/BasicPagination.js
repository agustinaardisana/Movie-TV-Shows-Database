import Pagination from "@material-ui/lab/Pagination";
import { createMuiTheme, ThemeProvider, makeStyles } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#032541",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const BasicPagination = ({ totalPages, pageNumber, changePageNumber }) => {
  const classes = useStyles();

  const handleChange = (e, value) => {
    changePageNumber(e, value);
  };

  return (
    <ThemeProvider theme={theme}>
      {totalPages > 1 && (
        <div className={classes.root}>
          <Pagination
            color="primary"
            count={totalPages}
            defaultPage={1}
            onChange={handleChange}
            page={pageNumber}
          />
        </div>
      )}
    </ThemeProvider>
  );
};

export default BasicPagination;
