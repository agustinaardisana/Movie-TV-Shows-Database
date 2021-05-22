import { Nav, StyledUl, StyledLi } from "./Commons";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNav = styled(Nav)`
  /* justify-content: space-around; */
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.families.title};
  font-size: ${(props) => props.theme.fonts.sizes.h3};
  font-weight: bold;
`;

const MediaDetailNavBar = ({ id }) => {
  return (
    <StyledNav justifyContent="space-around">
      <StyledUl>
        <StyledLi>
          <StyledLink to={`/movie/${id}/info`}>INFO</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to={`/movie/${id}/cast`}>REPARTO</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to={`/movie/${id}/videos`}>VIDEOS</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to={`/movie/${id}/similar`}>SIMILARES</StyledLink>
        </StyledLi>
      </StyledUl>
    </StyledNav>
  );
};

export default MediaDetailNavBar;
