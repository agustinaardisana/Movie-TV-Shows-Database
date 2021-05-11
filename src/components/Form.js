import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import { useState } from "react";
import { AlignedButton } from "./Commons";
import { useHistory } from "react-router-dom";

const StyledForm = styled.form`
  width: 250px;
`;

const StyledLabel = styled.label`
  color: ${(props) => props.theme.colors.text};
  position: ${(props) => props.theme.position.parent};
`;

const StyledInput = styled.input`
  border: solid 1px ${(props) => props.theme.colors.text};
  width: ${(props) => props.theme.width.full};
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.primary};
  padding: ${(props) => props.theme.spacing.sm};
  transition: ease width 1s, ease opacity 1s;
  /* opacity: 0; to opacity: 1 when active. how??? */
`;

const SearchButton = styled(AlignedButton)`
  color: ${(props) => props.theme.colors.text};
  position: ${(props) => props.theme.position.child};
  z-index: 1;
  transition: ease transform 1s;
  transition-delay: 10ms;
`;

const Form = () => {
  let history = useHistory();

  const [openInput, setOpenInput] = useState(false);

  const handleClick = () => setOpenInput(!openInput);

  const handleSubmit = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      // handleSearch(e.target.value);
      history.push("/search");
    }
  };

  return (
    <StyledForm>
      <StyledLabel aria-label="Buscar">
        {openInput ? (
          <>
            <SearchButton
              type="button"
              onClick={handleClick}
              top="-7px"
              transform="translateX(200px)"
            >
              <SearchIcon aria-label="búsqueda" fontSize="large" />
            </SearchButton>
            <StyledInput
              type="text"
              placeholder="Títulos, personas, géneros..."
              aria-labelledby="title__search"
              onKeyDown={handleSubmit}
            />
          </>
        ) : (
          <SearchButton
            type="button"
            onClick={handleClick}
            top="1px"
            left="8px"
          >
            <SearchIcon aria-label="búsqueda" fontSize="large" />
          </SearchButton>
        )}
      </StyledLabel>
    </StyledForm>
  );
};

export default Form;
