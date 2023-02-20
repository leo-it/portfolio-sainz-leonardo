import { Box } from "@mui/material";
import { CardUsersSay } from "./CardUsersSay";
import { Carousel } from "./Carousel";
import React from "react";
import imageOne from "../../public/img/userSay.png"

/* import imageOne from "../../public/img/users/user2.webp"
 */
export const Opinions = ({ opinions }) => {
  
  return (
    <Box
      sx={{
        px: "10px",
        width: { xs: "100%", md: "50%" },
      }}
    >
      {opinions ? (
        <Carousel>
          {opinions?.map((opinion) => (
            <Box sx={{ display: "flex" }} className="keen-slider__slide ">
              <CardUsersSay
                profilePicture={imageOne}
                fullname={opinion.name}
                /*  country={"UK"} */
                stars={opinion.stars}
                description={opinion.description}
              />
            </Box>
          ))}

          {/*  <Box sx={{ display: "flex" }} className="keen-slider__slide ">
          <CardUsersSay
            fullname={"Norma"}
            stars={4}
            description="I downloaded this app and was like “is it really going to help me fall asleep faster?” And it did. I was asleep within 5 minutes!"
          />
        </Box> */}
        </Carousel>
      ) : (
        <Carousel>
          <>
            <Box sx={{ display: "flex" }} className="keen-slider__slide ">
              <CardUsersSay
                profilePicture={imageOne}
                fullname={"Cargando..."}
                /*  country={"UK"} */
                stars={4}
                description="Cargando..."
              />
            </Box>{" "}
            <Box sx={{ display: "flex" }} className="keen-slider__slide ">
              <CardUsersSay
                profilePicture={imageOne}
                fullname={"Cargando..."}
                /*  country={"UK"} */
                stars={4}
                description="Cargando..."
              />
            </Box>
          </>
        </Carousel>
      )}
    </Box>
  );
};
