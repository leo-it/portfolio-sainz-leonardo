import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "rgb(110, 7, 243)",
    },
    secondary: {
      main: "#141c3a",
    },
    info: {
      main: "#fff",
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h2: {
          color: "secondary",
          fontSize: 45,
          "@media (min-width:600px)": {
            fontSize: 25,
          },
        },
        h3: {
          color: "secondary",
          fontSize: 35,
          "@media (min-width:600px)": {
            fontSize: 22,
          },
        },
        h4: {
          color: "secondary",
          fontSize: 28,
          "@media (min-width:600px)": {
            fontSize: 15,
          },
        },
        h5: {
          color: "secondary",

          fontSize: 15,
          "@media (min-width:600px)": {
            fontSize: 28,
          },
        },
        h6: {
          color: "secondary",
          fontSize: 10,
          "@media (min-width:600px)": {
            fontSize: 20,
          },
        },
      },
    },
  },
});
