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
              Hi, I’m Leo. Nice to meet you.
            </Typography>

            <Typography
              sx={{ mt: 3 }}
              justifyContent="center"
              alignItems="center"
              textAlign={"center"}
              variant="h6"
              color="white"
            >
              Since beginning my journey as a freelance designer over 11 years
              ago, I've done remote work for agencies, consulted for startups,
              and collaborated with talented people to create digital products
              for both business and consumer use. I'm quietly confident,
              naturally curious, and perpetually working on improving my chops
              one design problem at a time.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
