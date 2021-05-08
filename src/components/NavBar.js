import styled from "styled-components";
import { Link } from "react-router-dom";
import { Flex } from "./Commons";

import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import TheatersRoundedIcon from "@material-ui/icons/TheatersRounded";
import LiveTvRoundedIcon from "@material-ui/icons/LiveTvRounded";
import Form from "./Form";

const Nav = styled(Flex)`
  width: ${(props) => props.theme.width.full};
  height: 90px;
  padding: ${(props) => props.theme.spacing.md};
  background-color: ${(props) => props.theme.colors.primary};
`;

const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  padding: 0 ${(props) => props.theme.spacing.sm};
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.text};
`;

const NavBar = () => {
  return (
    <>
      <Nav as="nav">
        <List>
          <ListItem>
            <StyledLink to="/">
              <HomeRoundedIcon aria-label="inicio" fontSize="large" />
            </StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/movie">
              <TheatersRoundedIcon aria-label="películas" fontSize="large" />
            </StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/tv">
              <LiveTvRoundedIcon aria-label="series" fontSize="large" />
            </StyledLink>
          </ListItem>
        </List>
        <Form />
      </Nav>
    </>
  );
};
export default NavBar;
