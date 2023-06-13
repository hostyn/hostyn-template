import App from "@components/App";
import publicContent from "@middleware/publicContent";
import Home from "@views/Home";

export default function Page() {
  return (
    <App>
      <Home />
    </App>
  );
}

export const getServerSideProps = publicContent();
