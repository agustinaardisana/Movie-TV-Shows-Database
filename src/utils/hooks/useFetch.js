import { useState, useEffect } from "react";
import { createURL } from "../variables";

const useFetch = (pathName, mediaType) => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch(createURL(pathName, mediaType))
      .then((res) => res.json())
      .then((data) => setInfo(data.results || data));
  }, []);

  return info;
};

export default useFetch;
