import styled from "styled-components";
import { NavLink } from "react-router-dom";
//
import { Nav, Ul, StyledLi } from "./Commons";

const StyledNav = styled(Nav)`
  @media (max-width: 300px) {
    padding: ${(props) => props.theme.spacing.sm};
  }
`;

const StyledUl = styled(Ul)`
  @media (max-width: 300px) {
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const ListItem = styled(StyledLi)`
  @media (max-width: 300px) {
    margin: ${(props) => props.theme.spacing.sm};
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
`;

const MediaDetailNavBar = ({ id, mediaType }) => {
  return (
    <Nav justifyContent="space-around">
      <StyledUl>
        <ListItem>
          <StyledLink
            to={`/${mediaType}/${id}/info`}
            activeClassName="selected"
          >
            INFO
          </StyledLink>
        </ListItem>
        {mediaType === "person" && (
          <ListItem>
            <StyledLink
              to={`/${mediaType}/${id}/credits`}
              activeClassName="selected"
            >
              CREDITOS
            </StyledLink>
          </ListItem>
        )}
        {mediaType !== "person" && (
          <>
            <ListItem>
              <StyledLink
                to={`/${mediaType}/${id}/cast`}
                activeClassName="selected"
              >
                REPARTO
              </StyledLink>
            </ListItem>
            <ListItem>
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
            </ListItem>
            <ListItem>
              <StyledLink
                to={`/${mediaType}/${id}/similar`}
                activeClassName="selected"
              >
                SIMILARES
              </StyledLink>
            </ListItem>{" "}
          </>
        )}
      </StyledUl>
    </Nav>
  );
};

export default MediaDetailNavBar;
