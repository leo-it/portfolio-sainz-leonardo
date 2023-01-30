import { Box, Grid, Typography } from "@mui/material";

import CardProject from "../ui/CardProject";
import Image from "next/image";
import React from "react";

export const Projects = () => {
  return (
    <>
      <Box
        justifyContent="center"
        alignItems="center"
        textAlign={"center"}
        sx={{
          minHeight: { xs: "50vh", sm: "80vh" },
          mt: { xs: 125, md: 0 },
        }}
      >
        <Typography variant="h2" fontWeight={"bold"}>
          My Projects
        </Typography>
        <Typography variant="h3" marginTop={10} marginBottom={5}>
          Here are a few past design projects I've worked on.
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <CardProject img={"comida.jpg"} />
          </Grid>{" "}
          <Grid item xs={12} sm={4}>
            <CardProject img={"sleep.png"} />
          </Grid>{" "}
          <Grid item xs={12} sm={4}>
            <CardProject img={"comida.jpg"} />
          </Grid>{" "}
          <Grid item xs={12} sm={4}>
            <CardProject img={"sleep.png"} />
          </Grid>{" "}
          <Grid item xs={12} sm={4}>
            <CardProject img={"comida.jpg"} />
          </Grid>{" "}
          <Grid item xs={12} sm={4}>
            <CardProject img={"sleep.png"} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
