import "../styles/globals.css";
import type { AppProps } from "next/app";
import Landingpage from "../containers/Landingpage";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col bg-neutral-50 font-libre">
      <Landingpage />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
