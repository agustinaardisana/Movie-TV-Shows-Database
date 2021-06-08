import styled from "styled-components";
import { NavLink } from "react-router-dom";
//
import { Nav, Ul, StyledLi } from "./Commons";

const StyledUl = styled(Ul)`
  @media (max-width: 300px) {
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const StyledLink = styled(NavLink)`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.families.title};
  font-size: ${(props) => props.theme.fonts.sizes.h3};
  font-weight: bold;
  opacity: 0.3;

  &:hover,
  &.selected {
    border-bottom: 2px solid ${(props) => props.theme.colors.text};
    opacity: 1;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.extraSmall}) {
    font-size: 14px;
  }

  @media (max-width: 300px) {
    padding-top: ${(props) => props.theme.spacing.xs};
    margin-left: ${(props) => props.theme.spacing.md};
  }
`;

const MediaDetailNavBar = ({ id, mediaType }) => {
  return (
    <Nav justifyContent="space-around">
      <StyledUl>
        <StyledLi>
          <StyledLink
            to={`/${mediaType}/${id}/info`}
            activeClassName="selected"
          >
            INFO
          </StyledLink>
        </StyledLi>
        {mediaType === "person" && (
          <StyledLi>
            <StyledLink
              to={`/${mediaType}/${id}/credits`}
              activeClassName="selected"
            >
              CREDITOS
            </StyledLink>
          </StyledLi>
        )}
        {mediaType !== "person" && (
          <>
            <StyledLi>
              <StyledLink
                to={`/${mediaType}/${id}/cast`}
                activeClassName="selected"
              >
                REPARTO
              </StyledLink>
            </StyledLi>
            <StyledLi>
              {mediaType === "movie" ? (
                <StyledLink
                  to={`/${mediaType}/${id}/videos`}
                  activeClassName="selected"
                >
                  VIDEOS
                </StyledLink>
              ) : (
                <StyledLink
                  to={`/${mediaType}/${id}/seasons/1`}
                  activeClassName="selected"
                >
                  EPISODIOS
                </StyledLink>
              )}
            </StyledLi>
            <StyledLi>
              <StyledLink
                to={`/${mediaType}/${id}/similar`}
                activeClassName="selected"
              >
                SIMILARES
              </StyledLink>
            </StyledLi>{" "}
          </>
        )}
      </StyledUl>
    </Nav>
  );
};

export default MediaDetailNavBar;
