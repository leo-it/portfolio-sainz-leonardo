import { Box, Typography } from "@mui/material";
import React, { FC } from "react";

import Image from "next/image";

interface Props {
  profilePicture: string;
  name: string;
  stars: number;
  description: string;
}
export const CardUsersSay: FC<Props> = ({
  profilePicture,
  name,
  stars,
  description,
}) => {
  return (
    <Box
      sx={{
        width: { xs: "265px", md: "358px" },
        height: { xs: "290px", md: "345px" },
        border: 1.4,
        color: "#6e07f3",
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
          <Box
            sx={{
              mr: { xs: "15px", md: "20px" },
              width: { xs: "50px", md: "50px" },
              height: { xs: "50px", md: "50px" },
              position: "relative",
            }}
          >
            <Image
              src={profilePicture}
              alt="border"
              layout="fill"
              objectFit="contain"
              className="circle__border"
            />
          </Box>

          <Box color="black" justifyContent={"center"} sx={{ mt: "auto" }}>
            <h5>{name}</h5>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            my: { xs: "12px", md: "20px" },
          }}
        >
          <Typography sx={{ color: "orange" }} variant="h3" color="black">
            {"★".repeat(++stars).padEnd(5, "☆")}
          </Typography>
        </Box>
        <Box color="#141c3a">
          <h6>{description}</h6>
        </Box>
      </Box>
    </Box>
  );
};
