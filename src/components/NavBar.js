import styled from "styled-components";
import { Link } from "react-router-dom";
import { Nav, StyledUl, StyledLi } from "./Commons";

import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import TheatersRoundedIcon from "@material-ui/icons/TheatersRounded";
import LiveTvRoundedIcon from "@material-ui/icons/LiveTvRounded";
import Form from "./Form";

const StyledNav = styled(Nav)`
  width: ${(props) => props.theme.width.full};
  height: 90px;
`;

const List = styled(StyledUl)`
  @media (max-width: ${(props) => props.theme.breakpoints.small}) {
    position: ${(props) => props.theme.position.fixed};
    bottom: 0;
    left: 0;
    background-color: ${(props) => props.theme.colors.primary};
    width: 100%;
    justify-content: space-around;
    z-index: 3;
    padding: ${(props) => props.theme.spacing.md};
    /* opacity: 0.9; */
    border-radius: 5px;
  }
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.text};

  /* & > svg {
    @media (max-width: ${(props) => props.theme.breakpoints.small}) {
      font-size: 28px;
    }
  } */
`;

const NavBar = () => {
  return (
    <>
      <StyledNav>
        <List>
          <StyledLi>
            <StyledLink to="/">
              <HomeRoundedIcon aria-label="inicio" fontSize="large" />
            </StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to="/movie">
              <TheatersRoundedIcon aria-label="películas" fontSize="large" />
            </StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to="/tv">
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
