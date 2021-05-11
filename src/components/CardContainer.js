import styled from "styled-components";
import { Flex } from "./Commons";
import Card from "./Card";

const StyledCardContainer = styled(Flex)`
  width: ${(props) => props.theme.width.full};
`;

const CardContainer = ({ dataMovies, dataTV, mediaType }) => {
  return (
    <>
      <StyledCardContainer justifyContent="center" flexWrap="wrap">
        {dataMovies &&
          dataMovies.map((item, index) => {
            if (index < 5) {
              return <Card item={item} key={item.id} mediaType={mediaType} />;
            }
          })}
        {dataTV &&
          dataTV.map((item, index) => {
            if (index < 5) {
              return <Card item={item} key={item.id} mediaType={mediaType} />;
            }
          })}
      </StyledCardContainer>
    </>
  );
};

export default CardContainer;
