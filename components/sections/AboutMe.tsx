import { Box, Typography } from "@mui/material";

import Image from "next/image";
import React from "react";
import en from "@/locales/en";
import es from "@/locales/es";
import { useRouter } from "next/router";

export const AboutMe = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "es" ? es : en;
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
              width: { xs: 340, sm: "100%" },
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
              {t.aboutMe.title}
            </Typography>

            <Typography
              sx={{ mt: 3 }}
              justifyContent="center"
              alignItems="center"
              textAlign={"center"}
              variant="h6"
              color="white"
            >
            {t.aboutMe.description}<br/>{t.aboutMe.description2} </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
