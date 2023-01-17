import { Box, Grid, Typography } from "@mui/material";

import Image from "next/image";
import React from "react";

export const Tecnologies = () => {
  return (
    <>
      <Box
        style={{
          /*     maxWidth: "1341px", */
          height: "500px",
          padding: "0px 0px",
        }}
        justifyContent="center"
        alignItems="center"
        textAlign={"center"}
        bgcolor={"white"}
        sx={{
          margin: "80px auto",
          borderRadius: "10px",
          minHeight: "80vh",
          maxWidth: { xs: "90%", sm: "800px", xl: "1440px" },
        }}
      >
        <Grid height={"100%"} container>
          <Grid
            item
            sx={{ boxShadow: { xs: 1, md: 3 }, border: ".5px solid gray.300", pb:{xs:"20px", sm:"0"} }}
            xs={12}
            sm={4}
          >
            <Box
              sx={{
                mx: "auto",
                mt: { xs: 7 },
                width: 45,
                height: 35,
                position: "relative",
              }}
            >
              <Image
                src="/img/frontend.svg"
                alt="foto de perfil"
                layout="fill"
                objectFit="contain"
              />
            </Box>
            {/* todo unificar fuentes responsive a 3 o 4 maximo */}
            <Typography
              variant="h5"
              sx={{
                mt: 4,
                font: "bold",
              }}
            >
              Frontend Developer
            </Typography>
            <Typography variant="h6" sx={{ mt: 4 }}>
              I value simple content structure, clean design patterns, and
              thoughtful interactions.
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mt: 4,
                color: "red",
              }}
            >
              Tecnologies & Languages
            </Typography>
            <Typography sx={{ mt: 4 }} variant="h6">
              js react nextjs
            </Typography>
          </Grid>{" "}
          <Grid
            item
            sx={{ boxShadow: { xs: 1, md: 3 }, border: ".5px solid gray.300", pb:{xs:"20px", sm:"0"} }}
            xs={12}
            sm={4}
          >
            <Box
              sx={{
                mx: "auto",
                mt: { xs: 7 },
                width: 45,
                height: 35,
                position: "relative",
              }}
            >
              <Image
                src="/img/frontend.svg"
                alt="foto de perfil"
                layout="fill"
                objectFit="contain"
              />
            </Box>
            {/* todo unificar fuentes responsive a 3 o 4 maximo */}
            <Typography
              variant="h5"
              sx={{
                mt: 4,
                font: "bold",
              }}
            >
              Frontend Developer
            </Typography>
            <Typography variant="h6" sx={{ mt: 4 }}>
              I value simple content structure, clean design patterns, and
              thoughtful interactions.
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mt: 4,
                color: "red",
              }}
            >
              Tecnologies & Languages
            </Typography>
            <Typography sx={{ mt: 4 }} variant="h6">
              js react nextjs
            </Typography>
          </Grid>{" "}
          <Grid
            item
            sx={{ boxShadow: { xs: 1, md: 3 }, border: ".5px solid gray.300", pb:{xs:"20px", sm:"0"} }}
            xs={12}
            sm={4}
          >
            <Box
              sx={{
                mx: "auto",
                mt: { xs: 7 },
                width: 45,
                height: 35,
                position: "relative",
              }}
            >
              {/*  <Image src="/img/profile.svg" height={30} width={30} /> */}
              <Image
                src="/img/frontend.svg"
                alt="foto de perfil"
                layout="fill"
                objectFit="contain"
              />
            </Box>
            {/* todo unificar fuentes responsive a 3 o 4 maximo */}
            <Typography
              variant="h5"
              sx={{
                mt: 4,
                font: "bold",
              }}
            >
              Frontend Developer
            </Typography>
            <Typography variant="h6" sx={{ mt: 4 }}>
              I value simple content structure, clean design patterns, and
              thoughtful interactions.
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mt: 4,
                color: "red",
              }}
            >
              Tecnologies & Languages
            </Typography>
            <Typography sx={{ mt: 4 }} variant="h6">
              js react nextjs
            </Typography>
          </Grid>{" "}
        </Grid>
      </Box>
    </>
  );
};
