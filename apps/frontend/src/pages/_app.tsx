import { trpc } from "@services/trpc";
import "@styles/globals.css";
import { createGlobalStyle } from "styled-components";
import colors from "ui/config/theme";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });

const GlobalStyle = createGlobalStyle`
    html {
      background-color: ${colors.grey[900]};
      color: ${colors.primary[100]};
    }
  `;

function MyApp({ Component, pageProps }) {
  return (
    <main className={nunito.className}>
      <GlobalStyle />
      <Component {...pageProps} />
    </main>
  );
}

export default trpc.withTRPC(MyApp);
