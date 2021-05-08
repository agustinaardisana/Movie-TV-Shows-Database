import styled from "styled-components";
import error404 from "../assets/404.svg";
import { FlexCenter, StyledImg } from "../components/Commons";

const Container = styled(FlexCenter)`
  padding: ${(props) => props.theme.spacing.lg};
`;

const Img = styled(StyledImg)`
  /* css */
`;

const Page404 = () => {
  return (
    <Container>
      <Img src={error404} alt="Error 404" />
    </Container>
  );
};

export default Page404;
