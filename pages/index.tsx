import { AboutMe, SayHello, Tecnologies } from "@/components/sections";
import { Box, Typography } from "@mui/material";
import { FormOpinions, Opinions } from "@/components/ui";
import { collection, getDocs, getFirestore } from "firebase/firestore";

import { FC } from "react";
import { GetServerSideProps } from "next";
import { PortfolioLayout } from "@/components/layout";
import { Projects } from "@/components/sections/projects";
import firebaseApp from "@/firebase";

const db = getFirestore(firebaseApp);
interface Props {
  opinions: any;
}
export const Home: FC<Props> = ({ opinions }) => {
  return (
    <>
      <PortfolioLayout
        title={"Portfolio"}
        pageDescription={"Portafolio descripcion"}
      >
        <Box
          style={{
            margin: "80px auto",
            maxWidth: "1440px",
            padding: "0px 30px",
          }}
        >
          <SayHello />
        </Box>
        <Box>
          <AboutMe />
        </Box>
        <Box sx={{ marginTop: "-14rem" }}>
          <Tecnologies />
        </Box>
        <Box
          style={{
            margin: "160px auto",
            maxWidth: "1440px",
            padding: "0px 30px",
          }}
        >
          <Projects />
        </Box>
        <Box
          style={{
            margin: "80px auto",
            maxWidth: "1440px",
            padding: "0px 30px",
          }}
        >
          <Typography
            textAlign={"center"}
            sx={{ mb: { xs: "20px", md: "100px" } }}
            marginBottom={"20px"}
            variant="h2"
            fontWeight={"bold"}
          >
            ¿Que te parecio mi web?
          </Typography>
          <Box sx={{ display: { xs: "block", md: "flex" } }}>
            <Opinions opinions={opinions} />
            <Box ml="80px"></Box>
            <FormOpinions />
          </Box>
        </Box>
      </PortfolioLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const querySnapshot = await getDocs(collection(db, "opinion"));
  const docs: any = [];
  querySnapshot.forEach((doc) => {
    docs.push({ ...doc.data(), id: doc.id });
  });

  return {
    props: {
      opinions: docs,
    },
  };
};

export default Home;
