import styled from "styled-components";
//
import { Flex } from "./Commons";
import Card from "./Card";

const StyledCardContainer = styled(Flex)`
  width: ${(props) => props.theme.width.full};
`;

const CardContainer = ({
  mediaType,
  info,
  preview,
  isCast,
  isSearch,
  isBlueBackground,
}) => {
  let windowSize = window.innerWidth;
  let index = 0;

  const defineIndex = (windowSize) => {
    if (windowSize >= 1200) {
      return (index = 5);
    } else if (windowSize >= 1000) {
      return (index = 4);
    } else if (windowSize >= 650) {
      return (index = 3);
    } else {
      return (index = 2);
    }
  };
  defineIndex(windowSize);

  return (
    <>
      <StyledCardContainer justifyContent="center" flexWrap="wrap">
        {preview
          ? info &&
            info.map((item, i) => {
              return (
                i < index && (
                  <Card
                    item={item}
                    key={item.id}
                    mediaType={item.media_type || mediaType}
                  />
                )
              );
            })
          : info &&
            info.map((item) => {
              return (
                <Card
                  item={item}
                  key={item.id}
                  mediaType={item.media_type || mediaType}
                  isCast={isCast}
                  isSearch={isSearch}
                  isBlueBackground={isBlueBackground}
                />
              );
            })}
      </StyledCardContainer>
    </>
  );
};

export default CardContainer;
