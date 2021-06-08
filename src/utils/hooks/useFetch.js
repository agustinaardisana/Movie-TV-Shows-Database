import { useState, useEffect } from "react";
//
import { createURL } from "../variables";

const useFetch = (pathName, mediaType, details, optionalQuery) => {
  const [info, setInfo] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(createURL(pathName, mediaType, details, optionalQuery))
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setInfo(data.results || data);
        setTotalPages(data.total_pages);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      });
  }, [pathName, mediaType, details, optionalQuery]);

  return { info, totalPages, isLoading };
};

export default useFetch;
