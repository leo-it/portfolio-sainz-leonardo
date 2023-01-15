import { AboutMe, SayHello, Tecnologies } from "@/components/sections";
import { Box, Button, Typography } from "@mui/material";

import { PortfolioLayout } from "@/components/layout";
import { Projects } from "@/components/sections/projects";

export default function Home() {
  return (
    <>
      <PortfolioLayout
        title={"Portfolio"}
        pageDescription={"Portafolio descripcion"}
      >
        <Box
          style={{
            margin: "80px auto",
            maxWidth: "1440px",
            padding: "0px 30px",
          }}
        >
          <SayHello />
        </Box>
        <Box>
          <AboutMe />
        </Box>
        <Box sx={{ marginTop: "-14rem" }}>
          <Tecnologies />
        </Box>
        <Box
          style={{
            margin: "160px auto",
            maxWidth: "1440px",
            padding: "0px 30px",
          }}
        >
          <Projects />
        </Box>
      </PortfolioLayout>
    </>
  );
}
