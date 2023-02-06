import { Box, Button, Typography } from "@mui/material";

import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";

const Footer = () => {
  return (
    <Box 
      bgcolor={"#6E07F3"}
      style={{
      }}
      justifyContent="center"
      alignItems="center"
      textAlign={"center"}
      sx={{
        justifyContent: "center",
        alignContent: "center",
        minHeight: { xs: "20vh", md: "30vh" },
      }}
    >
      <Box paddingTop={5} paddingBottom={3}>
        <Typography id="footer" variant="h3" color={"white"}>
          Contactame
        </Typography>
        <Typography pt="5px" variant="h4" color={"white"}>
          lsainzveron@gmail.com
        </Typography>
      </Box>
      <Box display={"flex"} justifyContent="center">
        <Box width={44} height={44}>
          <a rel="noreferrer" target="_blank"  href="https://www.linkedin.com/in/leonardo-sainz/">
            <LinkedInIcon color="info" fontSize="large" />{" "}
          </a>
        </Box>
        <Box width={44} height={44}>
          <a rel="noreferrer" target="_blank" href="https://github.com/leo-it">
            <GitHubIcon color="info" fontSize="large" />
          </a>
        </Box>
        <Box width={44} height={44}>
          <a rel="noreferrer" target="_blank" href="mailto:lsainzveron@gmail.com">
            <AttachEmailIcon color="info" fontSize="large" />
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
