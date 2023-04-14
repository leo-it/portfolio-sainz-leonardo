import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import React, { useCallback } from "react";

import AlertDialogSlide from "@/components/ui/AlertDialogSlide";
import { Counter } from "@/hooks/UseReducer";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { PortfolioLayout } from "@/components/layout";
import { TextInputWithFocusButton } from "@/hooks/UseRef";

const values = [3, 9, 6, 4, 2, 1];

const HooksPractica = () => {
  const UseCallback = useCallback(() => values.sort(), []);

  return (
    <PortfolioLayout
      title={"Portfolio"}
      pageDescription={"Portafolio descripcion"}
    >
      <Box sx={{ minHeight: "20vh" }}></Box>
      <AlertDialogSlide
        name={"Descripcion de seccion"}
        title={"Practica de Hooks"}
        description={
          "Los Hooks son una nueva incorporación en React 16.8. Le permiten usar el estado y otras características de React sin escribir una clase.."
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
          <Typography>UseReducer</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            useReducersuele ser preferible useStatecuando tiene una lógica de
            estado compleja que involucra múltiples subvalores o cuando el
            siguiente estado depende del anterior. useReducertambién le permite
            optimizar el rendimiento de los componentes que desencadenan
            actualizaciones profundas porque puede transmitir dispatchen lugar
            de devoluciones de llamada .
          </Typography>

          <Counter />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>UseCallback</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Devuelve una devolución de llamada memorizada .
          </Typography>
          <Typography>ej:</Typography>
          <Typography>const values = [3, 9, 6, 4, 2, 1];</Typography>
          <Typography>
            const UseCallback = useCallback(() =&gt; values.sort(), [values])
          </Typography>
          <Typography>o tambien</Typography>
          <Typography>
            const memoizedValue = useMemo(() =&gt; values.sort(), [values])
          </Typography>
          <Typography>resultado:</Typography>
          <Typography>
            El fragmento de código anterior es un ejemplo artificial, pero
            muestra la diferencia entre las dos devoluciones de llamada:
            memoizedValue se convertirá en la matriz [1, 2, 3, 4, 6, 9].
            Mientras la variable de valores permanezca, también lo hará
            memoizedValue, y nunca se volverá a calcular. memoizedFunction será
            una función que devolverá el array [1, 2, 3, 4, 6, 9]. Lo bueno de
            estas dos devoluciones de llamada es que se almacenan en la caché y
            permanecen hasta que cambia la matriz de dependencia. Esto significa
            que, en caso de renderización, no se recolectará la basura.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>UseRef</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            useRefdevuelve un objeto ref mutable cuya .currentpropiedad se
            inicializa en el argumento pasado ( initialValue). El objeto
            devuelto persistirá durante toda la vida útil del componente.
          </Typography>
          <TextInputWithFocusButton />
          <Typography>
            Esencialmente, useRefes como una caja que puede contener un valor
            mutable en su .currentpropiedad. Es posible que esté familiarizado
            con las referencias principalmente como una forma de acceder al DOM
            . Si pasa un objeto ref a React with div ref=myRef , React
            establecerá su .currentpropiedad en el nodo DOM correspondiente
            siempre que ese nodo cambie. Sin embargo, useRef()es útil para algo
            más que el refatributo. Es útil para mantener cualquier valor
            mutable similar a cómo usaría los campos de instancia en las clases.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </PortfolioLayout>
  );
};

export default HooksPractica;
