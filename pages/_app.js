
import { ThemeProvider } from "@mui/system"
import "../styles/style.css"
import theme from "../styles/theme"

function MyApp({ Component, pageProps }) {
  return       <ThemeProvider theme={theme}>
  <Component {...pageProps} /></ThemeProvider>
}

export default MyApp
