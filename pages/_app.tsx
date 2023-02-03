import "@/styles/globals.css";

import { QueryClient, QueryClientProvider } from "react-query";

import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { store } from "./../redux/store";
import { theme } from "../themes/theme";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
