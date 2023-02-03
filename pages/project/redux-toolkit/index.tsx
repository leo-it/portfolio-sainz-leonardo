import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import { APIKEY } from "constants/keys";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Link from "next/link";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { saveInfletaData } from "@/redux/slices/infleta";

const ipCountry = "37.140.128.10";
const ReduxToolkit = () => {
  const cuotasRedux = useAppSelector((state) => state.infleta);
  const dispatch = useAppDispatch();

  const [cuotas, setCuotas] = React.useState("");
  const [inflacion, setInflacion] = useState();
  const [precioCuotas, setPrecioCuotas] = useState(0);
  const [precioContado, setPrecioContado] = useState();
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [calculoActive, setcalculoActive] = useState(false);
  const [precioConInteresFinal, setPrecioConInteresFinal] = useState({});
  const handleChange = (event: SelectChangeEvent) => {
    setCuotas(event.target.value as string);
  };
  useEffect(() => {
    if (cuotas && inflacion && precioCuotas && precioContado) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [cuotas, inflacion, precioCuotas, precioContado]);

  const handleClick = () => {
    console.log(precioConInteresFinal);
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
          data: precioConInteres,
          text: precioConInteres < precioCuotas * 1 ? "contado" : "cuotas",
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
      <form>
        <Box sx={{ maxWidth: 520 }}>
          <FormControl fullWidth>
            <TextField
              required
              id="precio-contado"
              label="Ingresá el precio de contado"
              variant="outlined"
              type="number"
              onChange={(event) => setPrecioContado(event.target.value)}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              required
              id="precio-cuotas"
              label="Ingresá el precio total en cuotas"
              variant="outlined"
              type="number"
              onChange={(event) => setPrecioCuotas(event.target.value)}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              required
              id="inflacion-id"
              label="Inflación mensual estimada"
              variant="outlined"
              type="number"
              onChange={(event) => setInflacion(event.target.value)}
            />
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              CuotasCantidad de cuotas
            </InputLabel>
            <Select
              required
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={cuotas}
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
    </>
  );
};

export default ReduxToolkit;
