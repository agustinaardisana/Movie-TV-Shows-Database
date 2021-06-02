import useFetch from "../utils/hooks/useFetch";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import CardContainer from "../components/CardContainer";
import BasicPagination from "../components/BasicPagination";

const StyledSection = styled.section`
  margin: ${(props) => props.theme.spacing.lg} 0;
  padding: 0 ${(props) => props.theme.spacing.md};
`;

const Credits = () => {
  const location = useLocation();
  const mediaType = location.state.mediaType;
  const id = location.state.id;
  const { info, totalPages } = useFetch(id, mediaType, "combined_credits");
  const credits = info && info.cast;

  return (
    <StyledSection>
      {credits && <CardContainer mediaType={mediaType} info={credits} />}
      <BasicPagination totalPages={totalPages} />
    </StyledSection>
  );
};

export default Credits;
