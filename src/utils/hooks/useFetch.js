import { useState, useEffect } from "react";
//
import { createURL } from "../variables";

const useFetch = (pathName, mediaType, details, optionalQuery) => {
  // este hook es fantastico!!!
  const [info, setInfo] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(createURL(pathName, mediaType, details, optionalQuery))
      .then((res) => res.json())
      .then((data) => {
        setInfo(data.results || data);
        setTotalPages(data.total_pages);
        setTimeout(() => {
          setIsLoading(false);
          // ojo: que pasa si tengo una conexion muy lenta y el fetch tarda mucho? 
          // le estarias sumando 500ms a una busqueda ya lenta de por si 
        }, 500);
      });
  }, [pathName, mediaType, details, optionalQuery]);

  return { info, totalPages, isLoading };
};

export default useFetch;
