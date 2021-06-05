import styled from "styled-components";
//
import { FlexCenter, StyledImg } from "../components/Commons";
//
import error404 from "../assets/404.svg";

const Container = styled(FlexCenter)`
  padding: ${(props) => props.theme.spacing.lg};
`;

const Img = styled(StyledImg)`
  /* css */
`;

const Page404 = () => {
  return (
    <Container>
      <Img src={error404} alt="Error 404, página no encontrada" />
    </Container>
  );
};

export default Page404;
