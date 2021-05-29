import { useLocation } from "react-router-dom";
import useFetch from "../utils/hooks/useFetch";
import styled from "styled-components";
// import { Flex } from "../components/Commons";
import CardContainer from "../components/CardContainer";

const StyledSection = styled.section`
  margin: ${(props) => props.theme.spacing.lg} 0;
  padding: 0 ${(props) => props.theme.spacing.md};
`;

const Similar = () => {
  const location = useLocation();
  const mediaType = location.state.mediaType;
  const id = location.state.id;
  const info = useFetch(id, mediaType, "similar");
  console.log(info);

  // return <p>Similar</p>;

  return (
    <StyledSection>
      {info && <CardContainer mediaType={mediaType} info={info} />}
    </StyledSection>
  );
};

export default Similar;
