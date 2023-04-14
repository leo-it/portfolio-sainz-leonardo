import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import AlertDialogSlide from "@/components/ui/AlertDialogSlide";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LazyLoad from "@/components/functional/LazyLoad";
import { PortfolioLayout } from "@/components/layout";

const PatronesDiseño = () => {
  return (
    <PortfolioLayout
      title={"Portfolio"}
      pageDescription={"Portafolio descripcion"}
    >
        <Box sx={{ height: "170vh" }}>
      <AlertDialogSlide
        name={"Descripcion de seccion"}
        title={"Practica con patrones de diseño"}
        description={
          "Los patrones de diseño son unas técnicas para resolver problemas comunes en el desarrollo de software y otros ámbitos referentes al diseño de interacción o interfaces"
        }
      />
      <Accordion
        sx={{
          mt: { xs: "40px", md: "50px" },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Lazy load o next dynamyc </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            La carga diferida en Next.js ayuda a mejorar el rendimiento de carga
            inicial de una aplicación al disminuir la cantidad de JavaScript
            necesario para representar una ruta. Le permite aplazar la carga de
            los componentes del cliente y las bibliotecas importadas, y solo
            incluirlos en el paquete del cliente cuando sean necesarios. Por
            ejemplo, es posible que desee diferir la carga de un modal hasta que
            un usuario haga clic para abrirlo.
          </Typography>

          <LazyLoad />
        </AccordionDetails>
      </Accordion></Box>
    </PortfolioLayout>
  );
};

export default PatronesDiseño;
