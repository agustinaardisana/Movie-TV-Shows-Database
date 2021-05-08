import styled from "styled-components";

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems || "flex-start"};
  flex-wrap: ${(props) => props.flexWrap};
`;

export const StyledImg = styled.img`
  width: ${(props) => props.theme.width.full};
  height: ${(props) => props.height || "auto"};
`;

export const AlignedButton = styled.button`
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  transform: ${(props) => props.transform || "unset"};
`;
// lists
// list items
//titles
//texts
