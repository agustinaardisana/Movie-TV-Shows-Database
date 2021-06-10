import styled from "styled-components";
//
import { StyledImg } from "./Commons";
//
import imgNotAvailable from "../assets/picture_not_available.png";

const Img = styled(StyledImg)`
  border-radius: ${(props) => props.theme.radius.regular};
  margin-right: ${(props) => (props.isInfoView ? "30px" : 0)};
  width: ${(props) => props.isInfoView && (props.isPerson ? "350px" : "300px")};

  @media (max-width: ${(props) => props.theme.breakpoints.small}) {
    width: ${(props) => props.isInfoView && "250px"};
    margin-right: 0;
  }
`;

const CardImage = ({ isPerson, info, isInfoView }) => {
  const infoSrc = isPerson ? info.profile_path : info.poster_path;
  const imgSrc = isPerson
    ? `https://image.tmdb.org/t/p/w342/`
    : `https://image.tmdb.org/t/p/w370_and_h556_bestv2/`;

  return (
    <Img
      src={infoSrc ? `${imgSrc}${infoSrc}` : imgNotAvailable}
      alt={info.title || info.name}
      isInfoView={isInfoView}
      isPerson={isPerson}
    />
  );
};

export default CardImage;
