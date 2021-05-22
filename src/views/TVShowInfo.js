import { useLocation } from "react-router-dom";
import useFetch from "../utils/hooks/useFetch";
import Hero from "../components/Hero";
import MediaDetailNavBar from "../components/MediaDetailNavBar";

const TVShowInfo = () => {
  let location = useLocation();
  const mediaType = "tv";
  const id = location.state.id;
  const info = useFetch(id, mediaType);
  const fetchInfo = (info) => {
    info && console.log(info);
  };
  console.log(fetchInfo(info));
  return (
    <>
      <Hero info={info} />
      <MediaDetailNavBar />
    </>
  );
};

export default TVShowInfo;
