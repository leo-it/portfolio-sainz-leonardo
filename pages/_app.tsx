import "@/styles/globals.css";

import { QueryClient, QueryClientProvider } from "react-query";

import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../themes/theme";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
