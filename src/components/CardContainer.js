import styled from "styled-components";
import { Flex } from "./Commons";
import Card from "./Card";

const StyledCardContainer = styled(Flex)`
  width: ${(props) => props.theme.width.full};
`;

const CardContainer = ({ mediaType, info }) => {
  return (
    <>
      <StyledCardContainer justifyContent="center" flexWrap="wrap">
        {info &&
          info.map((item) => {
            return <Card item={item} key={item.id} mediaType={mediaType} />;
          })}
        {/* {mediaType &&
          info.map((item, index) => {
            if (index < 5) {
              return <Card item={item} key={item.id} mediaType={mediaType} />;
            }
          })} */}
      </StyledCardContainer>
    </>
  );
};

export default CardContainer;
