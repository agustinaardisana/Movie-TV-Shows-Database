import { useLocation } from "react-router-dom";
import styled from "styled-components";
import CardSection from "../components/CardSection";
import useFetch from "../utils/hooks/useFetch";
import { generateTitle } from "../utils/variables";

const TVShowsCategoryContainer = styled.main`
  padding: ${(props) => props.theme.spacing.md}
    ${(props) => props.theme.spacing.sm};
`;

const TVShowsCategory = () => {
  let location = useLocation();
  const mediaType = "tv";
  const category = location.state.category;
  const info = useFetch(category, mediaType);
  const title = generateTitle(mediaType, category);

  return (
    <TVShowsCategoryContainer>
      <CardSection
        title={title}
        mediaType={mediaType}
        info={info}
      ></CardSection>
    </TVShowsCategoryContainer>
  );
};

export default TVShowsCategory;
