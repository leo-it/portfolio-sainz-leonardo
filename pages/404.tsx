import { Box, Typography } from "@mui/material";

import { PortfolioLayout } from "@/components/layout";
import React from "react";

const Custom404 = () => {
  return (
    <>
    <PortfolioLayout
        title={"Portfolio"}
        pageDescription={"Portafolio descripcion"}
      >
        404 page not found.
      </PortfolioLayout>
    </>
  );
};

export default Custom404;
