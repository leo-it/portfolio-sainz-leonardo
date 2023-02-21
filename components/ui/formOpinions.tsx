import * as Yup from "yup";

import { ErrorMessage, Field, Form, Formik } from "formik";
import { addDoc, collection, getFirestore } from "firebase/firestore";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";
import TextError from "./TextError";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import firebase from "../../firebase";
import { useState } from "react";

export const FormOpinions = () => {
  const db = getFirestore(firebase);
  const [formValues, setFormValues] = useState(null);
  const [activeStars, setActiveStars] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const initialValues = {
    name: "",
    description: "",
    stars: null,
  };

  const handleActiveStars = (i) => {
    let auxStars = [false, false, false, false, false];

    activeStars.forEach((star, idx) => {
      auxStars[idx] = idx <= i;
    });

    setActiveStars(auxStars);
  };

  const onSubmit = async (values, submitProps) => {
    /*     console.log("Form data", values);
     */ // console.log("submitProps", submitProps);
    try {
      await addDoc(collection(db, "opinion"), {
        ...values,
      });
    } catch (error) {
      console.log(error);
    }
    submitProps.setSubmitting(false);
    submitProps.resetForm();
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Tiene al menos 3 caracteres")
      .max(20, "Tiene que ser máximo 20 caracteres o menos")
      .required("Campo requerido"),
    description: Yup.string()
      .min(3, "Tiene al menos 3 caracteres")
      .max(200, "Maximo 200 caracteres")
      .required("Campo requerido"),
    stars: Yup.number().required("Campo requerido"),
  });
/* 
  const validateComments = (value) => {
    let error;
    if (!value) {
      error = "Required";
    }
    return error;
  }; */

  const MyTextField = ({ field, form, ...props }) => {
    return <TextField {...field} {...props} />;
  };

  return (
    <Box
      sx={{
        mx: "auto",
        mt:{xs:"40px",md:"0px"},
        width: { xs: "100%", md: "50%" },
      }}
    >
      <Formik
        initialValues={/* formValues || */ initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {(formik) => {
          return (
            <Form>
              <Box maxWidth={"500px"}>
                <div role="group" aria-labelledby="my-radio-group">
                  {activeStars.map((star, idx) => (
                    <label key={idx}
                      className={`label--star ${
                        activeStars[idx] && "activeStar"
                      }`}
                    >
                      <Field
                        onClick={() => handleActiveStars(idx)}
                        type="radio"
                        name="stars"
                        value={idx}
                      />
                      ★
                    </label>
                  ))}
                </div>

                <Field
                  component={MyTextField}
                  required
                  fullWidth
                  id="name"
                  name="name"
                  type="text"
                  label="Nombre"
                />
                <ErrorMessage name="name" component={TextError} />
                <Box marginTop={"15px"}></Box>
                <Field
                  component={MyTextField}
                  required
                  fullWidth
                  id="description"
                  name="description"
                  type="text"
                  label="Descripcion"
                />
                <ErrorMessage name="description" component={TextError} />
              </Box>

              <Button
                sx={{ mr: 3, mt: 2 }}
                variant="contained"
                onClick={() =>
                  setActiveStars([false, false, false, false, false])
                }
                color="error"
                type="reset"
              >
                Reiniciar
              </Button>
              <Button
                sx={{ mt: 2 }}
                variant="contained"
                color="primary"
                type="submit"
                disabled={!formik.isValid || formik.isSubmitting}
              >
                Publicar
              </Button>
            </Form>
          );
        }}
      </Formik>
      <style jsx global>
        {`
          .label--star {
            font-size: 40px;
          }

          input[type="radio"] {
            display: none;
          }

          .label--star {
            color: grey;
          }

          .activeStar {
            color: orange;
          }
        `}
      </style>
    </Box>
  );
};
