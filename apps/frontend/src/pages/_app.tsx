import { trpc } from "@services/trpc";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default trpc.withTRPC(MyApp);
