import styled from "styled-components";
import { NavLink } from "react-router-dom";
//
import { Nav, StyledUl, StyledLi } from "./Commons";

const StyledNav = styled(Nav)`
  /*  */
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
`;

const MediaDetailNavBar = ({ id, mediaType }) => {
  return (
    <StyledNav justifyContent="space-around">
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
              to={{
                pathname: `/${mediaType}/${id}/credits`,
                state: {
                  id: `${id}`,
                  mediaType: `${mediaType}`,
                },
              }}
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
                to={{
                  pathname: `/${mediaType}/${id}/cast`,
                  state: {
                    id: `${id}`,
                    mediaType: `${mediaType}`,
                  },
                }}
                activeClassName="selected"
              >
                REPARTO
              </StyledLink>
            </StyledLi>
            <StyledLi>
              {mediaType === "movie" ? (
                <StyledLink
                  to={{
                    pathname: `/${mediaType}/${id}/videos`,
                    state: {
                      id: `${id}`,
                      mediaType: `${mediaType}`,
                    },
                  }}
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
                to={{
                  pathname: `/${mediaType}/${id}/similar`,
                  state: {
                    id: `${id}`,
                    mediaType: `${mediaType}`,
                  },
                }}
                activeClassName="selected"
              >
                SIMILARES
              </StyledLink>
            </StyledLi>{" "}
          </>
        )}
      </StyledUl>
    </StyledNav>
  );
};

export default MediaDetailNavBar;
