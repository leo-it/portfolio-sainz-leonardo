import { Box, Grid, Typography } from "@mui/material";

import Image from "next/image";
import React from "react";
import en from "@/locales/en";
import es from "@/locales/es";
import { useRouter } from "next/router";

export const Tecnologies = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "es" ? es : en;

  return (
    <>
      <Box
        style={{
          /*     maxWidth: "1341px", */
          minHeight: "500px",
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
            sx={{
              boxShadow: { xs: 1, md: 3 },
              border: ".5px solid gray.300",
              pb: { xs: "20px", sm: "0" },
            }}
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
              variant="h6"
              sx={{
                mt: 4,
                font: "bold",
              }}
            >
              {t.tecnologies.front.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{ mt: 4, height: "60px", paddingX: "15px" }}
            >
              {t.tecnologies.front.description}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mt: 4,
                color: "#6e07f3",
              }}
            >
              {t.tecnologies.front.subtitle}
            </Typography>
            <Typography sx={{ mt: 4, px: "5px" }} variant="body2">
              JS, ReactJS, NextJS, HTML, CSS.
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mt: 4,
                color: "#6e07f3",
              }}
            >
              Frameworks & Dev Tools
            </Typography>
            <Typography
              sx={{ my: 4, width: "90px", mx: "auto" }}
              variant="body2"
            >
              Tailwind, MaterialUI, Redux Toolkit, React-Query.
            </Typography>
          </Grid>{" "}
          <Grid
            item
            sx={{
              boxShadow: { xs: 1, md: 3 },
              border: ".5px solid gray.300",
              pb: { xs: "20px", sm: "0" },
            }}
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
              variant="h6"
              sx={{
                mt: 4,
                font: "bold",
              }}
            >
              {t.tecnologies.back.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{ mt: 4, height: "60px", paddingX: "15px" }}
            >
              {t.tecnologies.back.description}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mt: 4,
                color: "#6e07f3",
              }}
            >
              {t.tecnologies.back.subtitle}
            </Typography>
            <Typography sx={{ mt: 4, px: "5px" }} variant="body2">
              JS, NestJS, NodeJS, TypeScript.
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mt: 4,
                color: "#6e07f3",
              }}
            >
              Frameworks & Dev Tools
            </Typography>
            <Typography
              sx={{ mt: 4, width: "50px", mx: "auto" }}
              variant="body2"
            >
              Express.js, Swagger, Postman.
            </Typography>
          </Grid>{" "}
          <Grid
            item
            sx={{
              boxShadow: { xs: 1, md: 3 },
              border: ".5px solid gray.300",
              pb: { xs: "20px", sm: "0" },
            }}
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
              variant="h6"
              sx={{
                mt: 4,
                font: "bold",
              }}
            >
              {t.tecnologies.other.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{ mt: 4, height: "60px", paddingX: "15px" }}
            >
              {t.tecnologies.other.description}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mt: 4,
                color: "#6e07f3",
              }}
            >
              {t.tecnologies.other.subtitle}
            </Typography>
            <Typography sx={{ mt: 4, px: "5px" }} variant="body2">
              Git, Scrum, Kanban.
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mt: 4,
                color: "#6e07f3",
              }}
            >
              Frameworks & Dev Tools
            </Typography>
            <Typography
              sx={{ mt: 4, width: "50px", mx: "auto" }}
              variant="body2"
            >
              Github, Jira, Figma.
            </Typography>
          </Grid>{" "}
        </Grid>
      </Box>
    </>
  );
};
