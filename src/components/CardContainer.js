import styled from "styled-components";
import { Flex } from "./Commons";
import Card from "./Card";

const StyledCardContainer = styled(Flex)`
  width: ${(props) => props.theme.width.full};
`;

const CardContainer = ({ dataMovies }) => {
  console.log(dataMovies);

  return (
    <>
      <StyledCardContainer justifyContent="center" flexWrap="wrap">
        {dataMovies &&
          dataMovies.map((movie, index) => {
            if (index < 5) {
              return <Card movie={movie} />;
            }
          })}
      </StyledCardContainer>
    </>
  );
};

export default CardContainer;
