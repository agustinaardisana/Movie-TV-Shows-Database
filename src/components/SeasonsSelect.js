import styled from "styled-components";

const StyledSelect = styled.select`
  font-size: 18px;
  line-height: 25px;
  cursor: pointer;
  padding: ${(props) => props.theme.spacing.sm}
    ${(props) => props.theme.spacing.md};
  border: 1px solid ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  border-radius: ${(props) => props.theme.radius.min};
  margin-left: ${(props) => props.theme.spacing.sm};
`;

const SeasonsSelect = ({ seasons, changeSeasonNumberValue, seasonNumber }) => {
  return (
    <StyledSelect
      onChange={(e) => changeSeasonNumberValue(e)}
      value={seasonNumber}
    >
      {seasons &&
        seasons
          .filter(
            (validSeason) =>
              validSeason.episode_count && validSeason.name !== "Especiales"
          )
          .map((season) => (
            <option key={season.season_number} value={season.season_number}>
              Temporada {season.season_number}
            </option>
          ))}
    </StyledSelect>
  );
};
export default SeasonsSelect;
