import { useState, useEffect } from "react";
import { createURL } from "../variables";

const useFetch = (pathName, mediaType, details, optionalQuery) => {
  const [info, setInfo] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetch(createURL(pathName, mediaType, details, optionalQuery))
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setInfo(data.results || data);
        setTotalPages(data.total_pages);
      });
  }, [pathName, mediaType, details, optionalQuery]);

  return { info, totalPages };
};

export default useFetch;
