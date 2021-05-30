import { useRouteMatch, Route, Switch, useParams } from "react-router-dom";
import useFetch from "../utils/hooks/useFetch";
import Hero from "../components/Hero";
import MediaDetailNavBar from "../components/MediaDetailNavBar";
import Info from "./Info";
import Videos from "./Videos";
import Cast from "./Cast";
import Similar from "./Similar";
import Seasons from "./Seasons";
import Credits from "./Credits";

const InfoContainer = () => {
  const { url } = useRouteMatch();
  const { mediaType, id } = useParams();
  const externalLinks = useFetch(id, mediaType, "external_ids");
  const info = useFetch(id, mediaType);

  return (
    <>
      {mediaType !== "person" && <Hero info={info} />}
      <MediaDetailNavBar id={id} mediaType={mediaType} />

      <Switch>
        <Route
          exact
          path={`${url}/info`}
          component={() => (
            <Info
              info={info}
              mediaType={mediaType}
              externalIds={externalLinks}
            />
          )}
        ></Route>
        <Route exact path={`${url}/cast`} component={Cast} />
        {mediaType === "movie" ? (
          <Route exact path={`${url}/videos`} component={Videos} />
        ) : (
          <Route
            exact
            path={`${url}/seasons/1`}
            component={() => <Seasons seasons={info.seasons} />}
          />
        )}{" "}
        <Route exact path={`${url}/similar`} component={Similar} />
        <Route exact path={`${url}/credits`} component={Credits} />
      </Switch>
    </>
  );
};

export default InfoContainer;
