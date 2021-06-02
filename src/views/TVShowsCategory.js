import { useLocation } from "react-router-dom";
import styled from "styled-components";
import CardSection from "../components/CardSection";
import useFetch from "../utils/hooks/useFetch";
import { generateTitle } from "../utils/variables";
import BasicPagination from "../components/BasicPagination";

const TVShowsCategoryContainer = styled.main`
  padding: ${(props) => props.theme.spacing.md};
  width: ${(props) => props.theme.width.full};
`;

const TVShowsCategory = () => {
  let location = useLocation();
  const mediaType = "tv";
  const category = location.state.category;
  const { info, totalPages } = useFetch(category, mediaType);
  const title = generateTitle(mediaType, category);

  return (
    <TVShowsCategoryContainer>
      <CardSection
        title={title}
        mediaType={mediaType}
        info={info}
      ></CardSection>
      <BasicPagination totalPages={totalPages} />
    </TVShowsCategoryContainer>
  );
};

export default TVShowsCategory;
