import { AboutMe, SayHello, Tecnologies } from "@/components/sections";
import {FormOpinions, Opinions} from "@/components/ui";
import { collection, getDocs, getFirestore } from "firebase/firestore";

import { Box } from "@mui/material";
import { GetServerSideProps } from "next";
import { PortfolioLayout } from "@/components/layout";
import { Projects } from "@/components/sections/projects";
import firebaseApp from "@/firebase";

const db = getFirestore(firebaseApp);

export default function Home(props) {
  console.log(props);

  return (
    <>
      <PortfolioLayout
        title={"Portfolio"}
        pageDescription={"Portafolio descripcion"}
      >
        <Box sx={{display:{xs:"block",md:"flex"}}}>
          <Opinions />
        <FormOpinions />
        </Box>
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
      </PortfolioLayout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context);

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
