import { Box, Typography } from "@mui/material";

import Image from "next/image";
import React from "react";

export const AboutMe = () => {
  return (
    <>
      <Box justifyContent="center" alignItems="center" textAlign={"center"}>
        <Box
          justifyContent="center"
          alignItems="center"
          sx={{
            width: "100%",
          }}
        >
          <Box
            sx={{
              mx: "auto",
              mt: { xs: 7 },
              width: { xs: 340, sm: "1229px" },
              height: { xs: 130, sm: 400 },
              position: "relative",
            }}
          >
            <Image
              src="/img/about-me.svg"
              alt="sobre mi"
              layout="fill"
              objectFit="contain"
            />
          </Box>
        </Box>
        {/* bg lila */}
        <Box
          sx={{
            pt: { xs: 15 },
            width: "100%",
            height: 611,
          }}
          bgcolor={"rgb(110, 7, 243)"}
        >
          <Box
            style={{
              margin: "10px auto",
              maxWidth: "800px",
              padding: "0px 30px",
            }}
          >
            <Typography variant="h3" color="white" fontWeight={"bold"}>
              Hola, soy Leo. Encantado de conocerte.
            </Typography>

            <Typography
              sx={{ mt: 3 }}
              justifyContent="center"
              alignItems="center"
              textAlign={"center"}
              variant="h6"
              color="white"
            >
              Desde que comence a aprender JavaScript hace mas de 4 años, tuve
              la oportunidad de trabajar para una software factory increible en
              la que use las mejores tecnologias para el frontend. Actualmente
              trabajo para Accenture en conjunto con el banco Galicia como
              desarrollador fullstack con Nextjs y Nestjs. En ambas empresas
              trabaje con personas talentosas y confiables.
              <br/> Estoy contento con lo que hago y trabajo constantemente para mejorar mis habilidades.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
