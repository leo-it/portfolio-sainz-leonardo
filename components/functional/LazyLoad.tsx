import { Button, Grid } from "@mui/material";
import React, { useState } from "react";

import dynamic from "next/dynamic";

const ComponentA = dynamic(() => import("@/components/ui/CardProjectMui"));
const ComponentB = dynamic(() => import("@/components/ui/CardProjectMui"));
const ComponentC = dynamic(() => import("@/components/ui/CardProjectMui"), {
  ssr: false,
});
const LazyLoad = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <Grid 
    container
    spacing={3}
    justifyContent="center"
    alignItems="center"
    display={"flex"}
    >
      <Grid item xs={12} sm={4}>
        {/* Load immediately, but in a separate client bundle */}
        <ComponentA
          alt="money-calc"
          modalUrl="https://www.youtube.com/embed/OVw1j94W5qc"
          title="Calculadora de gastos"
          text="Challenge para entrar a Alkemy, hecho en React y Nodejs"
          img={"/img/projects/money.png"}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        {/* Load on demand, only when/if the condition is met */}
        {showMore && (
          <ComponentB
            alt="money-calc"
            modalUrl="https://www.youtube.com/embed/OVw1j94W5qc"
            title="Calculadora de gastos"
            text="Challenge para entrar a Alkemy, hecho en React y Nodejs"
            img={"/img/projects/money.png"}
          />
        )}
        <Button variant="contained" onClick={() => setShowMore(!showMore)}>Mostrar/Ocultar componente</Button>
      </Grid>
      <Grid item xs={12} sm={4}>
        {/* Load only on the client side */}
        <ComponentC
          alt="money-calc"
          modalUrl="https://www.youtube.com/embed/OVw1j94W5qc"
          title="Calculadora de gastos"
          text="Challenge para entrar a Alkemy, hecho en React y Nodejs"
          img={"/img/projects/money.png"}
        />
      </Grid>
    </Grid>
  );
};

export default LazyLoad;
