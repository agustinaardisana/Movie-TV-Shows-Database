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
  width: ${(props) => props.width || props.theme.width.full};
  height: ${(props) => props.height || "auto"};
`;

export const AlignedButton = styled.button`
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  transform: ${(props) => props.transform || "unset"};
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems || "flex-start"};
  padding: ${(props) => props.theme.spacing.md};
  background-color: ${(props) => props.theme.colors.primary};
`;

export const StyledUl = styled.ul`
  display: flex;
`;

export const StyledLi = styled.li`
  padding: 0 ${(props) => props.theme.spacing.sm};
`;
// lists
// list items
//titles
//texts
