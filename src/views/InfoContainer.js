import { useRouteMatch, Route, Switch, useParams } from "react-router-dom";
import useFetch from "../utils/hooks/useFetch";
import Hero from "../components/Hero";
import MediaDetailNavBar from "../components/MediaDetailNavBar";
import Info from "./Info";
import Videos from "./Videos";
import Cast from "./Cast";
import Similar from "./Similar";
import Seasons from "./Seasons";
import Genre from "./Genre";

const InfoContainer = () => {
  const { url } = useRouteMatch();
  const { mediaType, id } = useParams();
  const externalLinks = useFetch(id, mediaType, "external_ids");
  const info = useFetch(id, mediaType);

  console.log(info);
  console.log(externalLinks);

  return (
    <>
      <Hero info={info} />
      <MediaDetailNavBar id={id} mediaType={mediaType} />

      <Switch>
        <Route exact path={`${url}/info`}>
          <Info info={info} mediaType={mediaType} externalIds={externalLinks} />
        </Route>
        <Route exact path={`${url}/cast`} component={Cast} />
        {mediaType === "movies" ? (
          <Route exact path={`${url}/videos`} component={Videos} />
        ) : (
          <Route exact path={`${url}/seasons/1`} component={Seasons} />
        )}{" "}
        <Route exact path={`${url}/similar`} component={Similar} />
        <Route exact path={`${url}/:genre`} component={Genre} />
      </Switch>
    </>
  );
};

export default InfoContainer;
