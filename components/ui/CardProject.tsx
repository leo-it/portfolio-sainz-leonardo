import { Box, Button, Typography } from "@mui/material";

import Image from "next/image";
import React from "react";

const CardProject = ({ img }) => {
  return (
    <Button >
      <Box className="view view-tenth">
        <img src={`/img/projects/${img}`} height="300" width="400"   />
        <Box className="mask">
        <Typography variant="h5" color={"white"} marginTop={2}>Title</Typography>
          <Typography variant="h6" color={"white"}>Your Text</Typography>
       
        </Box>
      </Box>
    </Button>
  );
};

export default CardProject;
