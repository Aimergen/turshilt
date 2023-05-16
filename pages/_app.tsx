import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Aside from "./components/AsideProfile";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Aside>
      <Component {...pageProps} />
    </Aside>
  );
}
