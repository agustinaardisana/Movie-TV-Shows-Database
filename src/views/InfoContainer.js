import { useRouteMatch, Route, Switch, useParams } from "react-router-dom";
//
import Cast from "./Cast";
import Credits from "./Credits";
import Hero from "../components/Hero";
import Info from "../components/Info";
import MediaDetailNavBar from "../components/MediaDetailNavBar";
import Similar from "./Similar";
import Seasons from "./Seasons";
import useFetch from "../utils/hooks/useFetch";
import Videos from "./Videos";

const InfoContainer = () => {
  const { url } = useRouteMatch();
  const { mediaType, id } = useParams();
  const externalLinks = useFetch(id, mediaType, "external_ids");
  const { info } = useFetch(id, mediaType);

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
        <Route
          exact
          path={`${url}/cast`}
          component={() => <Cast mediaType={mediaType} id={id} />}
        />
        {mediaType === "movie" ? (
          <Route
            exact
            path={`${url}/videos`}
            component={() => <Videos mediaType={mediaType} id={id} />}
          />
        ) : (
          <Route
            exact
            path={`${url}/seasons/:seasonNumber`}
            component={() => <Seasons seasons={info.seasons} id={id} />}
          />
        )}
        <Route
          exact
          path={`${url}/similar`}
          component={() => <Similar mediaType={mediaType} id={id} />}
        />
        <Route
          exact
          path={`${url}/credits`}
          component={() => <Credits mediaType={mediaType} id={id} />}
        />
      </Switch>
    </>
  );
};

export default InfoContainer;
