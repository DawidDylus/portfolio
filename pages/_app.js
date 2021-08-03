import '../styles/globals.css';
import { MainApplicationTheme } from '../styles/MainApplicationTheme';
import { ThemeProvider } from '@material-ui/core/styles';


function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={MainApplicationTheme}>
    <Component {...pageProps} />
  </ThemeProvider>
}

export default MyApp
