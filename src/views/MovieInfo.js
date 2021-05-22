import {
  useLocation,
  useRouteMatch,
  Route,
  Switch,
  useParams,
} from "react-router-dom";
import useFetch from "../utils/hooks/useFetch";
import Hero from "../components/Hero";
import MediaDetailNavBar from "../components/MediaDetailNavBar";
import Info from "../views/Info";
import Videos from "../views/Videos";
import Cast from "../views/Cast";
import Similar from "../views/Similar";

const MovieInfo = () => {
  let location = useLocation();
  const { url } = useRouteMatch();
  const { id } = useParams();

  const mediaType = "movie";
  const info = useFetch(id, mediaType);
  const fetchInfo = (info) => {
    info && console.log(info);
  };
  console.log(fetchInfo(info));

  return (
    <>
      <Hero info={info} />
      <MediaDetailNavBar id={id} />

      <Switch>
        <Route exact path={`${url}/info`} component={Info} />
        <Route exact path={`${url}/cast`} component={Cast} />
        <Route exact path={`${url}/similar`} component={Similar} />
        <Route exact path={`${url}/videos`} component={Videos} />
      </Switch>
    </>
  );
};

export default MovieInfo;
