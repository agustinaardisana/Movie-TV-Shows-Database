import styled from "styled-components";
import { Flex } from "./Commons";
import Card from "./Card";

const StyledCardContainer = styled(Flex)`
  width: ${(props) => props.theme.width.full};
`;

const CardContainer = ({ mediaType, info, preview }) => {
  let windowSize = window.innerWidth;
  let index = 0;
  const defineIndex = (windowSize) => {
    if (windowSize >= 1200) {
      return (index = 5);
    } else if (windowSize >= 1000) {
      return (index = 4);
    } else if (windowSize >= 650) {
      return (index = 3);
    } else if (windowSize >= 450) {
      return (index = 2);
    } else {
      return (index = 1);
    }
  };
  defineIndex(windowSize);

  return (
    <>
      <StyledCardContainer justifyContent="center" flexWrap="wrap">
        {preview
          ? info.map((item, i) => {
              if (i < index) {
                return <Card item={item} key={item.id} mediaType={mediaType} />;
              }
            })
          : info.map((item) => {
              return <Card item={item} key={item.id} mediaType={mediaType} />;
            })}
      </StyledCardContainer>
    </>
  );
};

export default CardContainer;
