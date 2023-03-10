import { Box, Grid, Typography } from "@mui/material";

import CardProjectMui from "../ui/CardProjectMui";

export const Projects = () => {
  return (
    <>
      <Box
        justifyContent="center"
        alignItems="center"
        textAlign={"center"}
        sx={{
          minHeight: { xs: "50vh", sm: "80vh" },
          mt: { xs: 0, md: 0 },
        }}
      >
        <Typography variant="h2" fontWeight={"bold"}>
          Mis proyectos
        </Typography>
        <Typography variant="h3" marginTop={10} marginBottom={5}>
          Aqui algunos de los proyectos en los que estuve trabajando.
        </Typography>
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
          display={"flex"}
        >
          <Grid item xs={12} sm={4}>
            <CardProjectMui
              alt="maquetacion"
              target="_blank"
              link="https://sleepy-eight.vercel.app/"
              title="Next y Material UI"
              text="Para esta web me enfoque en lo visual usando libreria para los efectos de movimiento, scroll y carrousel"
              img={"/img/projects/sleepy.png"}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <CardProjectMui
              alt="clon-mercado-libre"
              modalUrl="https://www.youtube.com/embed/fi6LKMdFnCM"
              title="Clon de Mercado Libre"
              text="Para esta practica use Tailwind, Nextjs y Redux Toolkit"
              img={"/img/projects/meli.png"}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <CardProjectMui
              alt="alkemy-proyecto-final"
              modalUrl="https://www.youtube.com/embed/C-b-SEvSTXQ"
              title="Alkemy ONG"
              text="Proyecto grupal que cuenta una vista para usuarios normales, un backoffice para el admin y el backend en Nodejs"
              img={"/img/projects/alkemyFinal.png"}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <CardProjectMui
              alt="react-query"
              target="_self"
              link="/project/react-query/"
              title="React Query"
              text="Practica con la libreria de React query simulando un ecommerce"
              img={"/img/projects/react-query.png"}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <CardProjectMui
              alt="redux-toolkit"
              target="_self"
              link="/project/redux-toolkit"
              title="Redux Toolkit"
              text="Practica con Redux Toolkit"
              img={"/img/projects/infleta.png"}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <CardProjectMui
              alt="money-calc"
              modalUrl="https://www.youtube.com/embed/OVw1j94W5qc"
              title="Calculadora de gastos"
              text="Challenge para entrar a Alkemy, hecho en React y Nodejs"
              img={"/img/projects/money.png"}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
