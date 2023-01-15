import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, ImageListItemBar, Typography } from "@mui/material";

import Image from "next/image";
import React from 'react'

const CardProject = ({img}) => {
  return (<>
    <Box
    sx={{
      mx: "auto",
      mt: { xs: 7 },
      width: 431,
      height: 290,
      position: "relative",
    }}
  >
    <Image
      src={`/img/projects/${img}`}
      alt="foto de perfil"
      layout="fill"
      objectFit="contain"
    />
     <ImageListItemBar
            title="asd"
            subtitle="{item.author}"
           
            
          />
  </Box>
  </>
  )
}

export default CardProject