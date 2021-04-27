// const Footer = () => {
//   return <p>Footer</p>;
// };

import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const Footer = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container style={{ width: "100%" }}>
        <Typography
          component="footer"
          style={{ backgroundColor: "#3f51b5", height: "50px" }}
        />
      </Container>
    </React.Fragment>
  );
};

export default Footer;
