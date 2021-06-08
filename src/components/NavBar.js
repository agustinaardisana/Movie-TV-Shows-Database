import styled from "styled-components";
import { NavLink } from "react-router-dom";
//
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import TheatersRoundedIcon from "@material-ui/icons/TheatersRounded";
import LiveTvRoundedIcon from "@material-ui/icons/LiveTvRounded";
//
import { Nav, Ul, StyledLi } from "./Commons";
import Form from "./Form";

const StyledNav = styled(Nav)`
  width: ${(props) => props.theme.width.full};
  height: 90px;

  @media all and (max-width: ${(props) =>
      props.theme.breakpoints.small}) and (orientation: landscape) {
    width: ${(props) => props.theme.width.full};
  }
`;

const List = styled(Ul)`
  @media (max-width: ${(props) => props.theme.breakpoints.small}) {
    position: ${(props) => props.theme.position.fixed};
    bottom: 0;
    left: 0;
    background-color: ${(props) => props.theme.colors.primary};
    width: 100%;
    justify-content: space-around;
    z-index: 3;
    padding: ${(props) => props.theme.spacing.md};
    border-radius: 5px;
  }
`;

const StyledLink = styled(NavLink)`
  color: ${(props) => props.theme.colors.text};
  opacity: 0.3;

  &:hover,
  &.selected {
    opacity: 1;
  }
`;

const NavBar = () => {
  return (
    <>
      <StyledNav>
        <List>
          <StyledLi>
            <StyledLink exact to="/" activeClassName="selected">
              <HomeRoundedIcon aria-label="inicio" fontSize="large" />
            </StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to="/movie" activeClassName="selected">
              <TheatersRoundedIcon aria-label="películas" fontSize="large" />
            </StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to="/tv" activeClassName="selected">
              <LiveTvRoundedIcon aria-label="series" fontSize="large" />
            </StyledLink>
          </StyledLi>
        </List>
        <Form />
      </StyledNav>
    </>
  );
};
export default NavBar;
