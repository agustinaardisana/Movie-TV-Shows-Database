import Pagination from "@material-ui/lab/Pagination";
import { createMuiTheme, ThemeProvider, makeStyles } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fff",
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
            pageNumber={pageNumber}
          />
        </div>
      )}
    </ThemeProvider>
  );
};

export default BasicPagination;

// import React from "react";
// import { MemoryRouter, Route } from "react-router";
// import { Link } from "react-router-dom";
// import Pagination from "@material-ui/lab/Pagination";
// import PaginationItem from "@material-ui/lab/PaginationItem";

// const BasicPagination = ({ totalPages }) => {
//   return (
//     <MemoryRouter initialEntries={["/inbox"]} initialIndex={0}>
//       <Route>
//         {({ location }) => {
//           const query = new URLSearchParams(location.search);
//           const page = parseInt(query.get("page") || "1", 10);
//           return (
//             <Pagination
//               page={page}
//               count={totalPages}
//               renderItem={(item) => (
//                 <PaginationItem
//                   component={Link}
//                   to={`/inbox${item.page === 1 ? "" : `?page=${item.page}`}`}
//                   {...item}
//                 />
//               )}
//             />
//           );
//         }}
//       </Route>
//     </MemoryRouter>
//   );
// };

// export default BasicPagination;
