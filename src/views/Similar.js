import { useLocation } from "react-router-dom";
import useFetch from "../utils/hooks/useFetch";
import styled from "styled-components";
import CardContainer from "../components/CardContainer";
import BasicPagination from "../components/BasicPagination";

const StyledSection = styled.section`
  padding: ${(props) => props.theme.spacing.lg}
    ${(props) => props.theme.spacing.md};
  background-color: ${(props) => props.theme.colors.primary};
`;

const Similar = () => {
  const location = useLocation();
  const mediaType = location.state.mediaType;
  const id = location.state.id;
  const { info, totalPages } = useFetch(id, mediaType, "similar");

  return (
    <StyledSection>
      {info && <CardContainer mediaType={mediaType} info={info} />}
      <BasicPagination totalPages={totalPages} />
    </StyledSection>
  );
};

export default Similar;
