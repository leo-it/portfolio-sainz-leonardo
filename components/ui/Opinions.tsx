import React, { FC } from "react";

import { Box } from "@mui/material";
import { CardUsersSay } from "./CardUsersSay";
import { Carousel } from "./Carousel";

interface Props {
  opinions: any;
}
export const Opinions: FC<Props> = ({ opinions }) => {
  return (
    <Box
      sx={{
        px: "10px",
        width: { xs: "100%", md: "50%" },
      }}
    >
      {opinions ? (
        <Carousel>
          {opinions?.map(
            (
              opinion: { name: string; stars: number; description: string },
              key: React.Key | null | undefined
            ) => (
              <Box
                key={key}
                sx={{ display: "flex" }}
                className="keen-slider__slide "
              >
                <CardUsersSay
                  profilePicture={"/img/userSay.png"}
                  name={opinion.name}
                  /*  country={"UK"} */
                  stars={opinion.stars}
                  description={opinion.description}
                />
              </Box>
            )
          )}

          {/*  <Box sx={{ display: "flex" }} className="keen-slider__slide ">
          <CardUsersSay
            name={"Norma"}
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
                profilePicture={"/img/userSay.png"}
                name={"Cargando..."}
                /*  country={"UK"} */
                stars={4}
                description="Cargando..."
              />
            </Box>{" "}
            <Box sx={{ display: "flex" }} className="keen-slider__slide ">
              <CardUsersSay
                profilePicture={"/img/userSay.png"}
                name={"Cargando..."}
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
