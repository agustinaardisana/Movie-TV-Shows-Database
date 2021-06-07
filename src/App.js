import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
//
import Footer from "./components/Footer";
import Genre from "./views/Genre";
import Home from "./views/Home";
import InfoContainer from "./views/InfoContainer";
import Movie from "./views/Movie";
import MoviesCategory from "./views/MoviesCategory";
import NavBar from "./components/NavBar";
import Page404 from "./views/Page404";
import Search from "./views/Search";
import TV from "./views/TV";
import TVShowsCategory from "./views/TVShowsCategory";
import { theme } from "./styles/theme";

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
            <Route exact path="/tv" component={TV} />
            <Route
              path="/search/multi/:searchedValue/page/:pageNumber"
              component={Search}
            />
            <Route
              path="/movie/:category/page/:pageNumber"
              component={MoviesCategory}
            />
            <Route
              exact
              path={`/:mediaType/:genre/:genreId/page/:pageNumber`}
              component={Genre}
            />
            <Route
              path="/tv/:category/page/:pageNumber"
              component={TVShowsCategory}
            />
            <Route path="/:mediaType/:id" component={InfoContainer} />

            <Route component={Page404} />
          </Switch>

          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
