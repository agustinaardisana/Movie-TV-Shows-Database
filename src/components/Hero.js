import styled from "styled-components";

const HeroContainer = styled.div`
  width: ${(props) => props.theme.width.full};
  height: 600px;
  background-color: ${(props) => props.theme.colors.primaryLight};
`;

const HeroImage = styled.div`
  width: ${(props) => props.theme.width.full};
  height: ${(props) => props.theme.height.full};
  background-image: url("${(props) => props.src}");
  background-size: cover;
  background-position: center;
`;

const Hero = ({ info }) => {
  console.log(info);
  return (
    <HeroContainer>
      <HeroImage
        src={`https://image.tmdb.org/t/p/original${info.backdrop_path}`}
      />
    </HeroContainer>
  );
};

export default Hero;
