import { useState, useEffect } from "react";
import { createURL } from "../variables";

const useFetch = (pathName, mediaType, externalId, optionalQuery) => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch(createURL(pathName, mediaType, externalId, optionalQuery))
      .then((res) => res.json())
      .then((data) => setInfo(data.results || data));
  }, [pathName, mediaType, externalId]);

  return info;
};

export default useFetch;
