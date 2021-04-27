import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Movie from "./components/Movie";
import TV from "./components/TV";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/movie" component={Movie} />
            <Route exact path="/tv" component={TV} />
          </Switch>
        </Main>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
