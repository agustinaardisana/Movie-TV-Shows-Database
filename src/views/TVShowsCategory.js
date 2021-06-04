import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import CardSection from "../components/CardSection";
import useFetch from "../utils/hooks/useFetch";
import { generateTitle } from "../utils/variables";
import BasicPagination from "../components/BasicPagination";
import { useState } from "react";

const TVShowsCategoryContainer = styled.main`
  padding: ${(props) => props.theme.spacing.md};
  width: ${(props) => props.theme.width.full};
`;

const TVShowsCategory = () => {
  let params = useParams();
  let history = useHistory();
  const mediaType = "tv";
  const category = params.category;
  const title = generateTitle(mediaType, category);
  const [pageNumber, setPageNumber] = useState(1);
  const { info, totalPages } = useFetch(
    category,
    mediaType,
    "",
    `&page=${pageNumber}`
  );

  const changePageNumber = (e, value) => {
    setPageNumber(value);
    history.push(`/${mediaType}/${category}/page/${value}`);
  };

  return (
    <TVShowsCategoryContainer>
      <CardSection
        title={title}
        mediaType={mediaType}
        info={info}
      ></CardSection>
      <BasicPagination
        totalPages={totalPages}
        changePageNumber={changePageNumber}
        pageNumber={pageNumber}
      />
    </TVShowsCategoryContainer>
  );
};

export default TVShowsCategory;
