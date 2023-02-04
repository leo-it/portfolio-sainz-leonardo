import { Box, Button, Typography } from "@mui/material";

import {FC} from 'react';
import Image from "next/image";

interface PropTypes {
  img: string,
  text:string,
  title:string,
}

const CardProject:  FC<PropTypes> = ({ img, text, title }) => {
  return (
    <div>
      <Box className="view view-tenth">
        <Image alt="proyecto" src={`/img/projects/${img}`} height="300" width="380" />
        <Box className="mask">
          <Typography variant="h5" color={"white"} marginTop={5}>
            {title}
          </Typography>
          <Typography variant="h6" marginTop={5} color={"white"}>
            {text}
          </Typography>
          <Box marginTop={3}>

          <Button variant="contained" >
            Ver más
          </Button>
          </Box>
            {" "}
        </Box>
      </Box>
    </div>
  );
};

export default CardProject;
