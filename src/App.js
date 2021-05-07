import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "./styles/theme";
import "./App.scss";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Movie from "./components/Movie";
import TV from "./components/TV";
import Page404 from "./components/Page404";

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
            <Route exact path="/home" component={Home} />
            <Route exact path="/movie" component={Movie} />
            <Route exact path="/tv" component={TV} />
            <Route component={Page404} />
          </Switch>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
