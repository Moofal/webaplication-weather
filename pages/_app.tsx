import "../styles/main.scss";
import type { AppProps } from "next/app";
import { WeatherProvider } from "../context/WeatherContext";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <WeatherProvider>
      <Component {...pageProps} />;
    </WeatherProvider>
    </>
  )
}

export default MyApp;
