import { Box, Card, CardContent } from "@mui/material";

import AlertDialogSlide from "@/components/ui/AlertDialogSlide";
import Image from "next/image";
import Link from "next/link";
import { PortfolioLayout } from "@/components/layout";
import React from "react";
import Typography from "@mui/material/Typography";
import { useAppSelector } from "@/redux/hooks";

const Resultado = () => {
  const infletaSelector = useAppSelector((state) => state.infleta);
  console.log(infletaSelector);

  return (
    <PortfolioLayout title={"redux toolkit"} pageDescription={"redux toolkit"}>
      <AlertDialogSlide
        name={"Descripcion de seccion"}
        title={"Redux toolkit"}
        description={
          "La logica para calcular la inflacion fue generada por GPT-3, creado por OpenAI."
        }
      />
      <Box
        minHeight={"90vh"}
        display={"flex"}
        width={"100%"}
        alignContent={"center"}
        textAlign="left"
        alignItems="center"
        justifyContent={"center"}
        mx={"auto"}
      >
        {infletaSelector.precioConInteresFinal?.text ? (
          <Box sx={{ display: { xs: "block", sm: "flex" } }}>
            <Box marginX="auto" marginBottom={4}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography mt={5} variant="h4">
                    Paga en: {infletaSelector.precioConInteresFinal?.text}{" "}
                  </Typography>
                  <Typography mt={5} variant="h4">
                    precioConInteresFinal:
                    {infletaSelector.precioConInteresFinal?.data}
                  </Typography>
                  <Typography mt={5} variant="h4">
                    precioCuotas: {infletaSelector.precioCuotas}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            <Box
              marginBottom={4}
              sx={{
                mx: "auto",
                width: 370,
                height: 210,
                position: "relative",
              }}
            >
              <Image
                src="/img/projects/infleta-logica.png"
                alt="foto de perfil"
                layout="fill"
                objectFit="contain"
              />
            </Box>
          </Box>
        ) : (
          <Box width={"50%"} alignItems="center" mx="auto" textAlign="center">
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                {" "}
                <Typography mt={5} variant="h4" mb={3}>
                  No pudimos cargar tu solicitud, intenta nuevamente.
                </Typography>
                <Link href={"/project/redux-toolkit"}>Vuelve a intentar</Link>
              </CardContent>
            </Card>
          </Box>
        )}
      </Box>
    </PortfolioLayout>
  );
};

export default Resultado;
