import { useState, useEffect } from "react";
import { createURL } from "../variables";

const useFetch = (pathName, mediaType, details, optionalQuery) => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch(createURL(pathName, mediaType, details, optionalQuery))
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setInfo(data.results || data);
      });
  }, [pathName, mediaType, details, optionalQuery]);

  return info;
};

export default useFetch;
