import { Box, Grid, Typography } from "@mui/material";

import CardProject from "../ui/CardProject";
import Image from "next/image";
import Link from "next/link";
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
          {/* todo ver cards de codepen por ahi son mas esteticas
         ej https://codepen.io/collection/XLebem/
          */}
          <Grid item xs={12} sm={4}>
            <Link target="_blank" href={"https://sleepy-eight.vercel.app/"}>
              <CardProject
                title="Next y Material UI"
                text="Para esta web me enfoque en lo visual usando libreria para los efectos de movimiento, scroll y carrousel"
                img={"sleepy.png"}
              />
            </Link>
          </Grid>{" "}
          <Grid item xs={12} sm={4}>
            <Link href={"/project/react-query"}>
              <CardProject
                title="React Query"
                text="Practica con la libreria de React query simulando un ecommerce"
                img={"react-query.png"}
              />
            </Link>
          </Grid>{" "}
          <Grid item xs={12} sm={4}>
            <Link href={"/project/redux-toolkit"}>
              <CardProject
                title="Redux Toolkit"
                text="Practica con Redux Toolkit"
                img={"sleep.png"}
              />
            </Link>
          </Grid>{" "}
          <Grid item xs={12} sm={4}>
            <CardProject title="" text="" img={"sleep.png"} />
          </Grid>{" "}
          <Grid item xs={12} sm={4}>
            <CardProject title="" text="" img={"comida.jpg"} />
          </Grid>{" "}
          <Grid item xs={12} sm={4}>
            <CardProject title="" text="" img={"sleep.png"} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
