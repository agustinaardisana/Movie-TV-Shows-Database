import styled from "styled-components";
//
import { FlexCenter, StyledImg } from "./Commons";
//
import imgNotAvailable from "../assets/picture_not_available.png";

const Img = styled(StyledImg)`
  border-radius: ${(props) => props.theme.radius.regular};
`;

const CardImage = ({ isPerson, info }) => {
  const infoSrc = isPerson ? info.profile_path : info.poster_path;
  const imgSrc = isPerson
    ? `https://image.tmdb.org/t/p/w342/`
    : `https://image.tmdb.org/t/p/w370_and_h556_bestv2/`;

  return (
    <Img
      src={infoSrc ? `${imgSrc}${infoSrc}` : imgNotAvailable}
      alt={info.title || info.name}
    />
  );
};

export default CardImage;
