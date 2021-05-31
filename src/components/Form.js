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
  /* opacity: 0;
  /* review  this, I don't think it works*/
  opacity: ${(props) => (props.openInput ? "1" : "0")};
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
  const [searchValue, setSearchValue] = useState("");

  const handleClick = () => setOpenInput(!openInput);

  const handleChange = (e) => setSearchValue(e.target.value);

  const handleSubmit = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      console.log(history);
      history.push({
        pathname: `/search/multi/${searchValue}/page/1`,
        search: `${searchValue}`,
      });
      setOpenInput(false);
      setSearchValue("");
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
              openInput={openInput}
              type="text"
              placeholder="Títulos, personas, géneros..."
              aria-labelledby="title__search"
              onKeyDown={handleSubmit}
              onChange={handleChange}
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
