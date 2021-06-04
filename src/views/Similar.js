import { useLocation } from "react-router-dom";
import useFetch from "../utils/hooks/useFetch";
import styled from "styled-components";
import CardContainer from "../components/CardContainer";
import BasicPagination from "../components/BasicPagination";
import { useState } from "react";

const StyledSection = styled.section`
  padding: ${(props) => props.theme.spacing.lg}
    ${(props) => props.theme.spacing.md};
  background-color: ${(props) => props.theme.colors.primary};
`;

const Similar = () => {
  const location = useLocation();
  const mediaType = location.state.mediaType;
  const id = location.state.id;
  const [pageNumber, setPageNumber] = useState(1);
  const optionalQuery = `&page=${pageNumber}`;
  const { info, totalPages } = useFetch(
    id,
    mediaType,
    "similar",
    optionalQuery
  );

  const changePageNumber = (e, value) => {
    setPageNumber(value);
    // history.push(`/${mediaType}/${category}/page/${number}`);
  };

  return (
    <StyledSection>
      {info && <CardContainer mediaType={mediaType} info={info} />}
      <BasicPagination
        totalPages={totalPages}
        changePageNumber={changePageNumber}
        pageNumber={pageNumber}
      />
    </StyledSection>
  );
};

export default Similar;
