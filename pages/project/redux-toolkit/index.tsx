import { Button, IconButton, Tooltip, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import { APIKEY } from "constants/keys";
import AlertDialogSlide from "@/components/ui/AlertDialogSlide";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InfoIcon from "@mui/icons-material/Info";
import InputLabel from "@mui/material/InputLabel";
import Link from "next/link";
import MenuItem from "@mui/material/MenuItem";
import { PortfolioLayout } from "@/components/layout";
import Select from "@mui/material/Select";
import { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { saveInfletaData } from "@/redux/slices/infleta";

const ReduxToolkit = () => {
  const dispatch = useAppDispatch();

  const [cuotas, setCuotas] = React.useState(0);
  const [inflacion, setInflacion] = useState(0);
  const [precioCuotas, setPrecioCuotas] = useState(0);
  const [precioContado, setPrecioContado] = useState(0);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [calculoActive, setcalculoActive] = useState(false);
  const [precioConInteresFinal, setPrecioConInteresFinal] = useState({});
  const handleChange = (event: SelectChangeEvent) => {
    setCuotas(Number(event.target.value));
  };
  useEffect(() => {
    if (cuotas && inflacion && precioCuotas && precioContado) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [cuotas, inflacion, precioCuotas, precioContado]);

  const handleClick = () => {
    setcalculoActive(true);
    const precioConInteres = checkPaymentOption(
      precioContado,
      inflacion,
      cuotas
    );
    dispatch(
      saveInfletaData({
        cuotas: cuotas,
        inflacion: inflacion,
        precioCuotas: precioCuotas,
        precioContado: precioContado,
        precioConInteresFinal: {
          data: Math.round(precioConInteres * 100) / 100,
          text: precioConInteres < precioCuotas * 1 ? "Contado" : "Cuotas",
        },
      })
    );
  };

  function checkPaymentOption(
    priceContado: number,
    inflation: number,
    installments: number
  ) {
    const inflatedPriceContado =
      priceContado * (1 + inflation / 100 / 12) ** (installments * 12);
    return inflatedPriceContado;
  }

  return (
    <>
      <PortfolioLayout
        title={"redux toolkit"}
        pageDescription={"redux toolkit"}
      >
        <AlertDialogSlide
          name={"Descripcion de seccion"}
          title={"Redux toolkit"}
          description={
            "Redux toolkit es una alternativa a redux que reduce el codigo repetitivo, simplifica la configuracon y Elimina la necesidad de agregar múltiples paquetes para tener una aplicación escalable."
          }
        />
        <Box
          display={"flex"}
          width={"100%"}
          alignContent={"center"}
          textAlign="center"
          alignItems="center"
          justifyContent={"center"}
          m={"auto"}
          minHeight={"90vh"}
        >
          <Box minHeight={"600px"} sx={{ width: "600px" }}>
            <Typography variant="h3" sx={{ marginBottom: 5 }}>
              Calcula si pagar en cuotas o de contado{" "}
              <Tooltip title="Practica para el manejo de estados con Redux-toolkit">
                <IconButton>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
            </Typography>
            <form>
              <Box sx={{ maxWidth: "100%", mx: "22px" }}>
                <FormControl fullWidth sx={{ marginBottom: 2 }}>
                  <TextField
                    required
                    id="precio-contado"
                    label="Ingresá el precio de contado"
                    variant="outlined"
                    type="number"
                    onChange={(event: any) =>
                      setPrecioContado(event.target.value)
                    }
                  />
                </FormControl>
                <FormControl fullWidth sx={{ marginBottom: 2 }}>
                  <TextField
                    required
                    id="precio-cuotas"
                    label="Ingresá el precio total en cuotas"
                    variant="outlined"
                    type="number"
                    onChange={(event: any) =>
                      setPrecioCuotas(event.target.value)
                    }
                  />
                </FormControl>
                <FormControl fullWidth sx={{ marginBottom: 2 }}>
                  <TextField
                    required
                    id="inflacion-id"
                    label="Inflación mensual estimada"
                    variant="outlined"
                    type="number"
                    onChange={(event: any) => setInflacion(event.target.value)}
                  />
                </FormControl>

                <FormControl fullWidth sx={{ marginBottom: 2 }}>
                  <InputLabel id="demo-simple-select-label">
                    CuotasCantidad de cuotas
                  </InputLabel>
                  <Select
                    required
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={String(cuotas)}
                    label="cuotas"
                    onChange={handleChange}
                  >
                    <MenuItem value={3}>3 cuotas</MenuItem>
                    <MenuItem value={6}>6 cuotas</MenuItem>
                    <MenuItem value={12}>12 cuotas</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Button
                disabled={buttonDisabled}
                variant={"contained"}
                onClick={handleClick}
                color="primary"
              >
                <Link href={"redux-toolkit/resultado"}>
                  <Typography color={buttonDisabled ? "primary" : "white"}>
                    Calcular
                  </Typography>
                </Link>
              </Button>
            </form>
          </Box>
        </Box>
      </PortfolioLayout>
    </>
  );
};

export default ReduxToolkit;
