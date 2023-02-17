import { addDoc, collection, getFirestore } from "firebase/firestore";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";
import { Typography } from "@mui/material";
import firebase from "./../../firebase";
import { useState } from "react";

const FormOpinions = () => {
  const db = getFirestore(firebase);
  const valorInicial = {
    name: "",
    description: "",
    stars: null,
  };
  const [dato, setDato] = useState(valorInicial);

  const obtenerInputs = (e) => {
    const { name, value } = e.target;
    setDato({ ...dato, [name]: value });
  };

  const enviarInfo = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "opinion"), {
        ...dato,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box>
     <Typography variant="h2" fontWeight={"bold"}>¿Que te parecio mi web?</Typography>
      <form onSubmit={enviarInfo}>
        <input
          type="text"
          placeholder="nombre"
          name="name"
          value={dato.name}
          onChange={(e) => obtenerInputs(e)}
          required
        />
        <input
          type="text"
          placeholder="Descripcion"
          name="description"
          value={dato.description}
          onChange={(e) => obtenerInputs(e)}
          required
        />
        <input
          type="text"
          placeholder="estrellas"
          name="stars"
          value={dato.stars}
          onChange={(e) => obtenerInputs(e)}
          required
        />
        <button>enviar</button>
      </form>
    </Box>
  );
};

export default FormOpinions;
