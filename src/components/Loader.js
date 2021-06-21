import React from "react";
import styled from "styled-components";
//
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
//
import { FlexCenter } from "../components/Commons";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#032541",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

const Container = styled(FlexCenter)`
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const StyledTitle = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.families.title};
  margin-bottom: ${(props) => props.theme.spacing.md};
  font-size: ${(props) => props.theme.fonts.sizes.h3};
`;

const Loader = () => {
  // perfecto este loader
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StyledTitle>Cargando resultados...</StyledTitle>
        <div className={classes.root}>
          <CircularProgress color="primary" />
        </div>
      </Container>
    </ThemeProvider>
  );
};
export default Loader;
