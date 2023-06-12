import { trpc } from "@services/trpc";
import "@styles/globals.css";
import { createGlobalStyle } from "styled-components";
import colors from "ui/config/theme";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

const GlobalStyle = createGlobalStyle`
    html {
      background-color: ${colors.grey[900]};
      color: ${colors.primary[100]};
      font-family: ${nunito.style.fontFamily}
    }
  `;

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <GlobalStyle />
      <Component {...pageProps} />
    </main>
  );
}

export default trpc.withTRPC(MyApp);
