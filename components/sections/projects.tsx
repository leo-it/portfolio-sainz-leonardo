import { Box, Button, Grid, Typography } from "@mui/material";

import CardProjectMui from "../ui/CardProjectMui";
import en from "@/locales/en";
import es from "@/locales/es";
import { useRouter } from "next/router";
import { useState } from "react";

export const Projects = () => {
  const [visible, setVisible] = useState(false);
  const router = useRouter();
  const { locale } = router;
  const t = locale === "es" ? es : en;
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
          {t.projects.title}
        </Typography>
        <Typography variant="h3" marginTop={10} marginBottom={5}>
          {t.projects.subtitle}
        </Typography>
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
          display={"flex"}
        >
          {/*  */}
          <Grid item xs={12} sm={4}>
            <CardProjectMui
              alt="rick-and-morty"
              target="_blank"
              link="https://rick-and-morty-tan-nu.vercel.app/"
              title="Rick-and-morty"
              text="Para este proyecto aplique las ultimas tecnologias de nextjs 13 con typescript, tailwind css, animista para los efectos y algo de testing.   "
              img={"/img/projects/rickandmorty.png"}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <CardProjectMui
              alt="animaciones"
              target="_blank"
              link="https://portfolio-animado-framer-motion-p9autvxri-leo-it.vercel.app/"
              title="Animaciones"
              text="Practica con framer motion de animaciones"
              img={"/img/projects/motion-animacion.jpg"}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <CardProjectMui
              alt="shenga 3d"
              target="_blank"
              link="https://3dproject-peach.vercel.app/"
              title="Shenga 3d"
              text="Practica basica para usar modelos 3d"
              img={"/img/projects/shenga.PNG"}
            />
          </Grid>
          {/*  */}
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
              alt="codi.link"
              target="_blank"
              link="https://codi-link-leo-midudev.vercel.app/"
              title="Codi.link"
              text="Este es un editor de codigo html, css y js. Se uso JavaScript y Monaco para integrar el editor de VSC. Practica hecha siguiendo el tutorial de midudev"
              img={"/img/projects/codi.link.png"}
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

          {visible ? (
            <>
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
              {/*  <Grid item xs={12} sm={4}>
            <CardProjectMui
              alt="redux-toolkit"
              target="_self"
              link="/project/redux-toolkit"
              title="Redux Toolkit"
              text="Practica con Redux Toolkit"
              img={"/img/projects/infleta.png"}
            />
          </Grid> */}

              <Grid item xs={12} sm={4}>
                <CardProjectMui
                  alt="money-calc"
                  modalUrl="https://www.youtube.com/embed/OVw1j94W5qc"
                  title="Calculadora de gastos"
                  text="Challenge para entrar a Alkemy, hecho en React y Nodejs"
                  img={"/img/projects/money.png"}
                />
              </Grid>
              {/* <Grid item xs={12} sm={4}>
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
                  alt="hooks"
                  target="_self"
                  link="/project/hooks"
                  title="Hooks"
                  text="Practica con hooks"
                  img={"/img/projects/hooks.png"}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <CardProjectMui
                  alt="patrones"
                  target="_self"
                  link="/project/patrones"
                  title="Patrones de diseño"
                  text="Practica con patrones de diseño"
                  img={"/img/projects/patrones.png"}
                />
              </Grid> */}
            </>
          ) : (
            <></>
          )}
        </Grid>
        <Button
          sx={{
            mt: { xs: 2, md: 5 },
          }}
          onClick={() => setVisible(!visible)}
        >
          {t.projects.see}
          {visible ? t.projects.less : t.projects.more}
        </Button>
      </Box>
    </>
  );
};
