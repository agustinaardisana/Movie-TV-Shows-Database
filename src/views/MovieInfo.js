import { useLocation } from "react-router-dom";
import useFetch from "../utils/hooks/useFetch";

const MovieInfo = () => {
  let location = useLocation();
  const mediaType = "movie";
  const id = location.state.id;
  const info = useFetch(id, mediaType);
  const fetchInfo = (info) => {
    info && console.log(info);
  };
  console.log(fetchInfo(info));

  return <p>MovieInfo</p>;
};

export default MovieInfo;
