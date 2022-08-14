import { ThemeProvider } from "@mui/system";
import "../styles/style.css";
import theme from "../styles/theme";
import { createClient, Provider } from 'urql';

function MyApp({ Component, pageProps }) {
  const client = createClient({
    url: process.env.NEXT_PUBLIC_BACK_END_GRAP_DEV,
    fetchOptions: {
      credentials: "include",
      
    },
  });

  return (
    <Provider value={client}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
