import publicContent from "@middleware/publicContent";
import Home from "@views/Home";
import App from "components/App";

export default function Page() {
  return (
    <App>
      <Home />
    </App>
  );
}

export const getServerSideProps = publicContent();
