import styled from "styled-components";
//
import { FlexCenter, StyledImg } from "../components/Commons";
//
import error404 from "../assets/404.svg";

const Container = styled(FlexCenter)`
  padding: ${(props) => props.theme.spacing.lg};
  flex-direction: column;
`;

const Img = styled(StyledImg)`
  /* css */
`;

const StyledTitle = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.families.title};
  margin-bottom: ${(props) => props.theme.spacing.md};
  font-size: ${(props) => props.theme.fonts.sizes.h2};
`;

const Page404 = () => {
  return (
    <Container>
      <StyledTitle>
        Lo sentimos, no podemos encontrar la página a la que intentas ir.
      </StyledTitle>
      <Img src={error404} alt="Error 404, página no encontrada" />
    </Container>
  );
};

export default Page404;
