import styled from "styled-components";
import { FlexCenter } from "./Commons";

const FooterContainer = styled(FlexCenter)`
  width: 100%;
  height: 80px;
  padding: 0 30px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
`;

const Footer = () => {
  return (
    <FooterContainer as="footer">
      Hecho con ☕ y 🎶 en Ada ITW por Agus Ardisana
    </FooterContainer>
  );
};

export default Footer;
