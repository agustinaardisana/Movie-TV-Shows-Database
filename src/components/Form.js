import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import { useState } from "react";

const StyledLabel = styled.label`
  color: ${(props) => props.theme.colors.text};
`;

const StyledInput = styled.input`
  border: 0;
  max-width: 600px;
  font-size: 25px;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.primaryLight};
  border-radius: 25px;
  padding: ${(props) => props.theme.spacing.sm};
`;

const SearchButton = styled.button`
  color: ${(props) => props.theme.colors.text};
`;

// const SearchButtonActive = styled(SearchButton)`
//   color: ${(props) => props.theme.colors.primary};
//   position: relative;
//   left: 280px;
//   top: 5px;
// `;

const Form = () => {
  const [openInput, setOpenInput] = useState(false);

  const handleClick = () => setOpenInput(!openInput);

  return (
    <form>
      <StyledLabel aria-label="Buscar">
        <SearchButton type="button" onClick={handleClick}>
          <SearchIcon aria-label="búsqueda" fontSize="large" />
        </SearchButton>

        {openInput && (
          <>
            {/* <SearchButtonActive type="button" onClick={handleClick}>
              <SearchIcon aria-label="búsqueda" />
            </SearchButtonActive> */}
            <StyledInput
              type="text"
              placeholder="Ingresá tu búsqueda"
              aria-labelledby="title__search"
            />
          </>
        )}
      </StyledLabel>
    </form>
  );
};

export default Form;
