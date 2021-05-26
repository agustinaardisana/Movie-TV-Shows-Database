import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import { Flex } from "./Commons";
import styled from "styled-components";

const FlexContainer = styled(Flex)`
  margin-bottom: ${(props) => props.theme.spacing.md};
  color: ${(props) => props.theme.colors.link};
`;

const Rating = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating / 2);
  const halfStars = rating % 2 ? 1 : 0;
  const emptyStars = 5 - (fullStars + halfStars);

  for (let i = 0; i < fullStars; i++) {
    stars.push(<StarIcon key={`full-${i}`} />);
  }

  const completeStarsArray = () => {
    halfStars && stars.push(<StarHalfIcon key={`half`} />);

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<StarBorderIcon key={`empty-${i}`} />);
    }
    return stars;
  };

  return (
    <>
      <FlexContainer justify-content="flex-start">
        {stars.length !== 5 && completeStarsArray()}
      </FlexContainer>
    </>
  );
};

export default Rating;
