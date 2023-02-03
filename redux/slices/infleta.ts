import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { createSlice } from "@reduxjs/toolkit";

interface InfletaState {
  cuotas: number;
  inflacion: number;
  precioCuotas: number;
  precioContado: number;
  precioConInteresFinal:object;
}

const initialState: InfletaState = {
  cuotas: 0,
  inflacion: 0,
  precioCuotas: 0,
  precioContado: 0,
  precioConInteresFinal:{}
};
export const infletaSlice = createSlice({
  name: "infleta",
  initialState,
  reducers: {
    saveInfletaData: (state, action) => {
      state.cuotas = action.payload.cuotas;
      state.inflacion = action.payload.inflacion;
      state.precioCuotas = action.payload.precioCuotas;
      state.precioContado = action.payload.precioContado;
      state.precioConInteresFinal = action.payload.precioConInteresFinal;
    },
  },
});

export const { saveInfletaData } = infletaSlice.actions;

export default infletaSlice.reducer;
