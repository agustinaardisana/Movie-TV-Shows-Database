import styled from "styled-components";

const StyledSpan = styled.span`
  .visible-hidden {
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  &:focus {
    clip: auto;
    height: auto;
    overflow: auto;
    position: absolute;
    width: auto;
  }
`;
const HiddenTitle = () => {
  return <StyledSpan />;
};

export default HiddenTitle;