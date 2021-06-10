import styled from "styled-components";
//
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
//
import { FlexCenter } from "./Commons";
import HiddenTitle from "./HiddenTitle";

const FooterContainer = styled(FlexCenter)`
  width: ${(props) => props.theme.width.full};
  height: 80px;
  padding: 0 30px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
`;

const StyledLink = styled.a`
  color: ${(props) => props.theme.colors.link};
  margin: ${(props) => props.theme.spacing.sm};

  &:hover {
    color: ${(props) => props.theme.colors.text};
  }
`;

const Footer = () => {
  return (
    <FooterContainer as="footer">
      <p>
        Hecho con ☕ y 🎶 en
        <StyledLink href="https://adaitw.org/" target="_blank">
          Ada ITW
        </StyledLink>
        por
        <StyledLink
          href="https://www.linkedin.com/in/agustinaardisana/"
          target="_blank"
        >
          Agus Ardisana
        </StyledLink>
        <StyledLink href="https://github.com/agustinaardisana" target="_blank">
          <GitHubIcon />
          <HiddenTitle>Link a GitHub</HiddenTitle>
        </StyledLink>
        <StyledLink
          href="https://www.linkedin.com/in/agustinaardisana/"
          target="_blank"
        >
          <LinkedInIcon />
          <HiddenTitle>Link a LinkedIn</HiddenTitle>
        </StyledLink>
      </p>
    </FooterContainer>
  );
};

export default Footer;
