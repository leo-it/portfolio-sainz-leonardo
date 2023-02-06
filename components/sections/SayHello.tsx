import { Box, Typography } from "@mui/material";

import Image from "next/image";
import React from "react";

export const SayHello = () => {
  return (
    <>
      <Box
        justifyContent="center"
        alignItems="center"
        textAlign={"center"}
        sx={{
          height: {xs:"50vh", sm:"80vh"},
        }}
      >
        <Box sx={{ width: { xs: "100%" }, mt: { xs: 7 } }}>
          <Typography
            variant="h1"
            color="secondary"
            /* refactorizar size a variables TODO  */
            sx={{
              fontSize: {
                lg: 90,
                md: 80,
                sm: 65,
                xs: 30,
              },
            }}
          >
            Frontend Developer
          </Typography>
          <Typography
           sx={{
            fontSize: {
              lg: 70,
                md: 45,
                sm: 45,
              xs: 22,
            },
          }}
            variant="h3"
            color=" rgba(10, 10, 10, 0.9);
            }"
          >
            Desarrollador Reactjs/Nextjs
          </Typography>
        </Box>
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
              width: { xs: 150, sm: 310 },
              height: { xs: 150, sm: 329 },
              position: "relative",
            }}
          >
            {/*  <Image src="/img/profile.svg" height={30} width={30} /> */}
            <Image
              src="/img/profile1.svg"
              alt="foto de perfil"
              layout="fill"
              objectFit="contain"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};
