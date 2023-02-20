import { Box, Typography } from "@mui/material";

import Image from "next/image";
import React from "react";

export const CardUsersSay = ({
  /*  profilePicture, */
  fullname,
  stars,
  description,
}) => {
  const starsUi=()=>{
<Box>asd</Box>
  }
  return (
    <Box
      sx={{
        width: { xs: "265px", md: "358px" },
        height: { xs: "290px", md: "465px" },
        border: 1.4,
        color: "rgb(125, 125, 160)",
        borderRadius: "16px",
        display: "flex",
        justifyContent: "center",
        mx: "auto",
      }}
    >
      <Box
        sx={{
          width: { xs: "170px", md: "274px" },
          mt: { xs: "40px", md: "60px" },
          color: "white",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Box sx={{ mt: { xs: 1, md: 0 } }}>
            <Typography variant="h3" color="black">
              {fullname}
            </Typography>
            <Box
              sx={{
                mb: { xs: "12px", md: "20px" },
                mt: { xs: "3px", md: "5px" },
              }}
            >
              <h5 className="opacity--7"></h5>
            </Box>{" "}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            my: { xs: "12px", md: "20px" },
          }}
        >
            <Typography sx={{color: "orange"}} variant="h3" color="black">{"★".repeat(++stars).padEnd(5,"☆")}</Typography>
          {/*  {stars.map((s) => (
           <Box
              sx={{
                mr: { xs: "10px", md: "20px" },
                width: {
                  xs: "20px",
                  md: "26px",
                },
                height: { xs: "20px", md: "26px" },
                position: "relative",
              }}
            >
              <Image
                src="/img/star.svg"
                alt="sobre mi"
                layout="fill"
                objectFit="contain"
              />
            </Box>
           
          ))}*/}
        </Box>

        <Typography color="black">{description}</Typography>
      </Box>
    </Box>
  );
};
