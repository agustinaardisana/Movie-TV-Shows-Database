import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "./styles/theme";
import "./App.scss";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Movie from "./views/Movie";
import TV from "./views/TV";
import Page404 from "./views/Page404";
import MoviesCategory from "./views/MoviesCategory";
import TVShowsCategory from "./views/TVShowsCategory";
import MovieInfo from "./views/MovieInfo";
import TVShowInfo from "./views/TVShowInfo";
import Search from "./views/Search";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

ul {
  list-style-type: none;
  padding: 0;
}

button {
  cursor: pointer;
  border: transparent;
  background-color: transparent;
}
`;

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />

          <NavBar />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/movie" component={Movie} />
            <Route
              path="/movie/:Category/page/:pageNumber"
              component={MoviesCategory}
            />
            <Route path="/movie/:id/info" component={MovieInfo} />
            <Route exact path="/tv" component={TV} />
            <Route
              path="/tv/:category/page/:pageNumber"
              component={TVShowsCategory}
            />
            <Route path="/tv/:id/info" component={TVShowInfo} />
            <Route path="/search" component={Search} />
            <Route component={Page404} />
          </Switch>

          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
